import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { Observable } from "rxjs/Observable";

import { User } from "../../model/common/User";
import { MefiAuthService } from "../../services/common/MefiAuthService";

@Injectable()
export class LoginActivate implements CanActivate {
    private _authService: MefiAuthService;

    constructor(@Inject(MefiAuthService) private authService: MefiAuthService, private router: Router) {
        this._authService = authService;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
                                        Observable<boolean>|Promise<boolean>|boolean {

        /* if (! (this._authService.isAnonymous || this._authService.isAuthenticated)) {
            console.log("Redirecting user to /login");
            this.router.navigate(["/login"]);

            return false;
        } */

        return true;
    }
}
