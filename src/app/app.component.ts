import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-testing';
   constructor(private router: Router) {

   }
   navigateToLogin() {
this.router.navigateByUrl('/login');
   }
}
