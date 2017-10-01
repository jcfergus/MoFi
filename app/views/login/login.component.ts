import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-telerik-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-telerik-ui/sidedrawer/angular";

import { Button } from "tns-core-modules/ui/button";
import { FlexboxLayout } from "tns-core-modules/ui/layouts/flexbox-layout";
import { TextField } from "tns-core-modules/ui/text-field";
import { TextView } from "tns-core-modules/ui/text-view";

import { MefiAuthService } from "../../services/common/MefiAuthService";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    providers: [ MefiAuthService ]
})
export class LoginComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    private username: string;
    private password: string;
    private beAnonymous: boolean;

    constructor(private authService: MefiAuthService) {
    }

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    loginHandler(): void {
        if (this.username === "" || this.password === "") {
            return;
        }

        console.log(`Logging in: ${this.username} / ${this.password}`);

        this.authService.authenticateUser(this.username, this.password)
        .then((user) => {
            console.log("Logged in");

            return;
        })
        .catch((error) => {
            console.log("Error logging in.");

            return;
        });
    }
}
