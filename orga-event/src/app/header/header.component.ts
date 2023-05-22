import { Component } from '@angular/core';
import { AuthService } from '../authService';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  constructor(public authService: AuthService, private api: ApiService, private router: Router) { }

  seDeconnecter() {
    this.router.navigate(['/']);
    this.authService.isAdmin = false;
    setTimeout(() => {
      location.reload();
    }, 50);
  }
}
