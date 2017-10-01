const http = require("http");   // NativeScript HTTP module, not node.js
const util = require("util");
import { Cookie, CookieJar } from "tough-cookie-nativescript";
import { User } from "../../model/common/User";

export class MefiAuthService {
    private _mefiAuthUrl = "https://login.metafilter.com/logging-in.mefi";

    /**
     * Authenticates a user to Metafilter and returns a user object.
     *
     * @param username The username of the user to authenticate.
     * @param password The password of the user to authenticate.
     */
    authenticateUser(username, password): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            // const cookieString = this.getCookies(this._mefiAuthUrl);
            const postString = `user_name=${username}&user_pass=${password}`;

            http.request({ url: this._mefiAuthUrl,
                           method: "POST",
                           content: postString,
                           headers: {"Content-Type": "application/x-www-form-urlencoded" }})
                        .then((response) => {
                            if (response.statusCode !== 200) {
                                reject(new Error("Got non-200 response from login request."));

                                return;
                            }

                            const user = new User();

                            user.cookieJar = new CookieJar();

                            this.parseCookies(response, user.cookieJar);
                            user.isAuthenticated = true;
                            user.isAnonymous = false;
                            user.username = username;

                            resolve(user);

                            return;
                        })
                        .catch((error) => {
                            reject(error);

                            return;
                        });
        });
    }

    private parseCookies(response: Response, cookieJar: CookieJar) {
        if (typeof response.headers["Set-Cookie"] === "object") {
            console.log("Processing cookie headers.");
            response.headers["Set-Cookie"].forEach((cookieString) => {
                const cookie = Cookie.parse(cookieString);
                cookieJar.setCookieSync(cookie, this._mefiAuthUrl);
            });
        } else if (typeof response.headers["Set-Cookie"] === "string") {
            const cookie = Cookie.parse(response.headers["Set-Cookie"]);
            cookieJar.setCookieSync(cookie, this._mefiAuthUrl);
        }
    }
}
