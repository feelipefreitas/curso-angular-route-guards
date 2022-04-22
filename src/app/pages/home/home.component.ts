import { Component, OnInit } from '@angular/core';
import { UrlTree, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { CanDeactivateComp } from 'src/app/auth/can-deactivate-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, CanDeactivateComp {

  constructor(private _router: Router) { }

  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(confirm('Deseja realmente fazer o logoff?')) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {
  }

  logoff() {
    this._router.navigate(['/login']);
  }
}
