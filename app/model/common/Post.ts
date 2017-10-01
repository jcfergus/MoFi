
export class Post {

    private _body: string;
    private _title: string;
    private _siteBase: string;
    private _link: string;
    private _id: string;
    private _author: string;
    private _authorLink: string;
    private _authorId: string;

    set body(body) { this._body = body; }
    get body() { return this._body; }

    set title(title) { this._title = title; }
    get title() { return this._title; }

    set siteBase(siteBase) { this._siteBase = siteBase; }
    get siteBase() { return this._siteBase; }

    set link(link) { this._link = link; }
    get link() { return this._link; }

    set id(id) { this._id = id; }
    get id() { return this._id; }

    set author(author) { this._author = author; }
    get author() { return this._author; }

    set authorLink(authorLink) { this._authorLink = authorLink; }
    get authorLink() { return this._authorLink; }

    set authorId(authorId) { this._authorId = authorId; }
    get authorId() { return this._authorId; }

    constructor(options) {
        if (options.title) {
            this.title = options.title;
        }
        if (options.body) {
            this.body = options.body;
        }
        if (options.id) {
            this.id = options.id;
        }
        if (options.siteBase) {
            this.siteBase = options.siteBase;
        }
        if (options.link) {
            this.link = options.link;
        }
        if (options.author) {
            this.author = options.author;
        }
        if (options.authorLink) {
            this.authorLink = options.authorLink;
        }
        if (options.authorId) {
            this.authorId = options.authorId;
        }
    }
}
