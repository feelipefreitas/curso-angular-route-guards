import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private isAuthenticated = false;

    login(username: string, password: string): Observable<boolean> {
        return new Observable(subscriber => {
            setTimeout(() => {
                if(username === 'user' && password === 'pass') {
                    this.isAuthenticated = true;
                    subscriber.next(true);
                } else {
                    this.isAuthenticated = false;
                    subscriber.next(false);
                }
            }, 2000);
        });
    }

    isUserAuthenticated(): boolean {
        return this.isAuthenticated;
    }
}