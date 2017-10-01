const cheerio = require("cheerio");

import { Post } from "../../model/common/Post";
import { IndexParser } from "../common/IndexParser";

export class MefiPostIndexParser implements IndexParser {

    /**
     * Takes an HTML document and returns a list of posts contained in that HTML document.
     *
     * @param {*} html
     */
    parse(html: string): Promise<Array<Post>> {
        return new Promise((resolve, reject) => {
            const $ = cheerio.load(html);

            const postsDiv = $("div#posts");

            let currentPost = {};
            const parsedPosts = [];

            postsDiv.children().each((idx, el) => {
                if (el.type === "tag") {
                    if (el.name === "h2") {
                        if (el.attribs.class === "posttitle front") {
                            // This is a post title.
                            const postTitleElement = $(el);
                            const postTitle = postTitleElement.children("a").text();
                            const postUrl = postTitleElement.children("a").attr("href");
                            const postId = postUrl.match(/^\/(\d+)\//)[1];
                            const postBody = $(el).next();
                            const postByline = postBody.find("span.postbyline");
                            const bylineLinks = postByline.children("a");
                            const author = $(bylineLinks[0]);
                            const postAuthor = author.text();
                            const postAuthorLink = author.attr("href");
                            const postAuthorId = postAuthorLink.replace("/user/", "");
                            postBody.find("span.postbyline").remove();
                            currentPost = new Post({ title: postTitle,
                                                     siteBase: "https://www.metafilter.com/",
                                                     body: postBody.html(),
                                                     link: postUrl,
                                                     id: parseInt(postId, 10),
                                                     author: postAuthor,
                                                     authorLink: postAuthorLink,
                                                     authorId: parseInt(postAuthorId, 10) });
                            parsedPosts.push(currentPost);
                        }
                    }
                }
            });

            resolve(parsedPosts);

            return;
        });
    }
}
