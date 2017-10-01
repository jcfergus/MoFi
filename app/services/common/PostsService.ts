import { User } from "../../model/common/User";
import { IndexParser } from "./IndexParser";
import { MefiAuthService } from "./MefiAuthService";

const http = require("http");

export class PostsService {

    private _siteId: string;
    private _authService: MefiAuthService;
    private _parser: IndexParser;
    private _postUrl: string;
    private _user: User;

    private _userAgent: string =
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) " +
        "Chrome/61.0.3163.91 Safari/537.36";

    constructor(postUrl, siteId, parser, authService) {
        this._siteId = siteId;
        this._authService = authService;
        this._parser = parser;
        this._postUrl = postUrl;
    }

    get siteId() { return this._siteId; }
    set siteId(siteId) { this._siteId = siteId; }

    get authService() { return this._authService; }
    set authService(authService) { this._authService = authService; }

    get parser() { return this._parser; }
    set parser(parser) { this._parser = parser; }

    get postUrl() { return this._postUrl; }
    set postUrl(postUrl) { this._postUrl = postUrl; }

    getPosts() {

        return true;
    }

    fetchPosts(page) {

        return new Promise((resolve, reject) => {
            if (!page) {
                page = 1;
            }

            const pageUrl = `${this.postUrl}?page=${page}`;

            if (!this.parser) {
                reject(new Error("No parser set."));

                return;
            }

            http.request({ url: pageUrl,
                           headers: {
                                "User-Agent": this._userAgent,
                                Cookies: this._user.getCookies(pageUrl)
                           }
                        })
            .then((response) => {

                if (response.statusCode !== 200) {
                    reject(new Error(`Got non-200 status code response from ${this.postUrl}`));

                    return;
                }

                this.parser.parse(response.body)
                .then((posts) => {
                    resolve(posts);
                })
                .catch((parseErr) => {
                    reject(parseErr);

                    return;
                });
            })
            .catch((error) => {
                reject(error);

                return;
            });
        });
    }
}
