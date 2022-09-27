import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router) {
    this.authListener();
  }

  authListener() {
    if (!localStorage.getItem('Token')) {
      this.router.navigate(['/login']);
    }
  }
}
