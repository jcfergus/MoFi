import { CookieJar } from "tough-cookie-nativescript";

export class User {
    private _username: string;
    private _cookieJar: CookieJar;
    private _isAuthenticated: boolean = false;
    private _isAnonymous: boolean = false;

    get username(): string { return this._username; }
    set username(username: string) { this._username = username; }

    get cookieJar(): CookieJar { return this._cookieJar; }
    set cookieJar(cookieJar: CookieJar) { this._cookieJar = cookieJar; }

    get isAuthenticated(): boolean { return this._isAuthenticated; }
    set isAuthenticated(authed: boolean) { this._isAuthenticated = authed; }

    get isAnonymous(): boolean { return this._isAnonymous; }
    set isAnonymous(anon: boolean) { this._isAnonymous = anon; }

    constructor() {
        if (arguments.length > 0) {
            this.fromJson(arguments[0]);
        }
    }
    /**
     * Serialises a user to a JSON string - this can be written to app storage and reloaded
     * so the user doesn't have to log in each time.
     */
    toJson(): string {
        if (this.cookieJar) {
            const data = {
                username: this.username,
                cookieJar: this.cookieJar._jar.toJSON(),
                isAuthenticated: this.isAuthenticated,
                isAnonymous: this.isAnonymous
            };

            return JSON.stringify(data);
        }

        return;
    }

    /**
     * Loads a user from a JSON string created with User.toJson()
     */
    fromJson(json) {
        let data;
        if (typeof json === "object") {
            data = json;
        } else if (typeof json === "string") {
            data = JSON.parse(json);
        }

        this._username = data._username;
        this._isAuthenticated = data._isAuthenticated;
        this._isAnonymous = data._isAnonymous;
        this._cookieJar = CookieJar.fromJSON(data._cookieJar);
    }

    /**
     * Returns a string suitable for use as a Cookies: header for a request to the provided
     * url.
     *
     * @param url The URL to generate a cookies string for.
     */
    getCookies(url: string): string {
        return this.cookieJar.getCookieStringSync(url);
    }

    /**
     * This deauthenticates the user but does not put them into anonymous mode.
     */
    deauthenticate(): void {
        if (this.isAuthenticated) {
            this.cookieJar = new CookieJar();
            this.isAuthenticated = false;
            this.isAnonymous = false;
            this.username = "";
        }
    }

    /**
     * This puts the user into anonymous mode.
     */
    goAnonymous(): void {
        if (this.isAuthenticated) {
            this.username = "Anonymous";
            this.cookieJar = new CookieJar();
            this.isAuthenticated = false;
            this.isAnonymous = true;
        }
    }
}
