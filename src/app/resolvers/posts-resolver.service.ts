import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IPost } from "../interfaces/post.interface";
import { PostsService } from "../services/posts.service";

@Injectable({
    providedIn: 'root'
})
export class PostsResolver implements Resolve<IPost[]> {
    constructor(private _postsService: PostsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<IPost[]> | Promise<IPost[]> | IPost[] {
            // throw new Error('Error');
            return this._postsService.getPosts();
    }
}