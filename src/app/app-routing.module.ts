import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeAuthGuard } from "./auth/home-auth-guard.service";
import { CanDeactivateGuard } from "./auth/can-deactivate-guard.service";

import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { PostsResolver } from "./resolvers/posts-resolver.service";
import { PostComponent } from "./pages/post/post.component";
import { PostAuthGuard } from "./auth/post-auth-guard.service";

const ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [ HomeAuthGuard ], canDeactivate: [ CanDeactivateGuard ] },
    {
        path: 'posts',
        component: PostsComponent,
        resolve: { posts: PostsResolver },
        canActivate: [ PostAuthGuard ],
        canActivateChild: [ PostAuthGuard ],
        children: [
            { path: ':id', component: PostComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }