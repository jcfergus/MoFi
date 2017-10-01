const MefiAuthService = require("../../../services/common/MefiAuthService").MefiAuthService;
const User = require("../../../model/common/User").User;

const config = require("../../auth.config.json");

const session = require("../../session.config.json");

describe("Authenticate to mefi.", (done) => {
    it("will authenticate a user to metafilter and return a User object", () => {
        console.log("Preparing to auth user.");
        let authService = new MefiAuthService();

        return authService.authenticateUser(config.username, config.password).then(
            function(user) {
                assert(user.cookieJar !== undefined, "Got cookies.");
                let c = user.cookieJar.getCookieStringSync("https://www.metafilter.com/");
                assert(c.indexOf("USER_ID=39336") > -1, "Got correct userid.");
            }
        ).catch(function(err) {
            console.log("Failed to auth user.");
            console.log("Error: " + err);
            console.log("Stack: " + err.stack);
        });
    });
});

describe("Log out of mefi.", () => {
    it("will log the user out of metafilter", () => {
        let user = new User(session);
        let authService = new MefiAuthService();

        assert(user.cookieJar.getCookieStringSync("https://www.metafilter.com") !== "", "Have cookies before deauth.");

        user.deauthenticate();

        assert(user.cookieJar.getCookieStringSync("https://www.metafilter.com") === "", "Got back an empty jar.");
    });
});