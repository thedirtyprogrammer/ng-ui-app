// import { Injectable } from '@angular/core';
// import { CanActivateChild, Router } from '@angular/router';
// import { AuthService } from './auth.service';

// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanLoad {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivateChild(): boolean {
//     return this.checkAuthentication();
//   }

//   private checkAuthentication(): boolean {
//     if (this.authService.isLoggedIn()) {
//       return true; // User is authenticated, allow access to the route
//     } else {
//       this.router.navigate(['/login']); // User is not authenticated, redirect to login page
//       return false;
//     }
//   }
// }
