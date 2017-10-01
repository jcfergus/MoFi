"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MefiAuthService_1 = require("../../services/common/MefiAuthService");
var LoginActivate = /** @class */ (function () {
    function LoginActivate(authService, router) {
        this.authService = authService;
        this.router = router;
        this._authService = authService;
    }
    LoginActivate.prototype.canActivate = function (route, state) {
        /* if (! (this._authService.isAnonymous || this._authService.isAuthenticated)) {
            console.log("Redirecting user to /login");
            this.router.navigate(["/login"]);

            return false;
        } */
        return true;
    };
    LoginActivate = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(MefiAuthService_1.MefiAuthService)),
        __metadata("design:paramtypes", [MefiAuthService_1.MefiAuthService, router_1.Router])
    ], LoginActivate);
    return LoginActivate;
}());
exports.LoginActivate = LoginActivate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5BY3RpdmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxvZ2luQWN0aXZhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFDbkQsMENBQW1HO0FBS25HLHlFQUF3RTtBQUd4RTtJQUdJLHVCQUE2QyxXQUE0QixFQUFVLE1BQWM7UUFBcEQsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM3RixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLEtBQTZCLEVBQUUsS0FBMEI7UUFHakU7Ozs7O1lBS0k7UUFFSixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFsQlEsYUFBYTtRQUR6QixpQkFBVSxFQUFFO1FBSUksV0FBQSxhQUFNLENBQUMsaUNBQWUsQ0FBQyxDQUFBO3lDQUFzQixpQ0FBZSxFQUFrQixlQUFNO09BSHhGLGFBQWEsQ0FtQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL21vZGVsL2NvbW1vbi9Vc2VyXCI7XG5pbXBvcnQgeyBNZWZpQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29tbW9uL01lZmlBdXRoU2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5BY3RpdmF0ZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogTWVmaUF1dGhTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChNZWZpQXV0aFNlcnZpY2UpIHByaXZhdGUgYXV0aFNlcnZpY2U6IE1lZmlBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLl9hdXRoU2VydmljZSA9IGF1dGhTZXJ2aWNlO1xuICAgIH1cblxuICAgIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JzZXJ2YWJsZTxib29sZWFuPnxQcm9taXNlPGJvb2xlYW4+fGJvb2xlYW4ge1xuXG4gICAgICAgIC8qIGlmICghICh0aGlzLl9hdXRoU2VydmljZS5pc0Fub255bW91cyB8fCB0aGlzLl9hdXRoU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlZGlyZWN0aW5nIHVzZXIgdG8gL2xvZ2luXCIpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9ICovXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIl19