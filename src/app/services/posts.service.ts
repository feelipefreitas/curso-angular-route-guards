import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { IPost } from "../interfaces/post.interface";

@Injectable({
    providedIn: 'root',
})
export class PostsService {

    constructor(private _http: HttpClient) { }

    getPosts(): Observable<IPost[]> {
        return this._http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
    }

    getPost(): Observable<IPost> {
        return this._http.get<IPost>('https://jsonplaceholder.typicode.com/posts/1');
    }
}