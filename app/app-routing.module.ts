import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MefiAuthService } from "./services/common/MefiAuthService";
import { LoginActivate } from "./shared/route-guard/LoginActivate";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "login", loadChildren: "./views/login/login.module#LoginModule" },
    { path: "home", loadChildren: "./views/home/home.module#HomeModule", canActivate: [LoginActivate] },
    { path: "browse", loadChildren: "./views/browse/browse.module#BrowseModule", canActivate: [LoginActivate] },
    { path: "search", loadChildren: "./views/search/search.module#SearchModule", canActivate: [LoginActivate] },
    { path: "featured", loadChildren: "./views/featured/featured.module#FeaturedModule", canActivate: [LoginActivate] },
    { path: "settings", loadChildren: "./views/settings/settings.module#SettingsModule", canActivate: [LoginActivate] }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
    providers: [ MefiAuthService, LoginActivate ]
})
export class AppRoutingModule { }
