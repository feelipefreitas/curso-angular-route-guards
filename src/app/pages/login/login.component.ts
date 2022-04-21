import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  username = '';
  password = '';
  loginSubs: Subscription = new Subscription();

  constructor(
    private _router: Router, 
    private _loginService: LoginService, 
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const fragment = this._activatedRoute.snapshot.fragment;

    if(fragment === 'notAuthenticated') {
      alert('É necessário fazer a autenticação.');
    }
  }

  ngOnDestroy(): void {
    this.loginSubs.unsubscribe();
  }

  onLogin() {
    this.loginSubs = this._loginService.login(this.username, this.password).subscribe(resp => {
      this._router.navigate(['/home']);
    });
  }
}
