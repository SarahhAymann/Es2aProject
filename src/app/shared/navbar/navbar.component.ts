import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {

  displayMenu = false;
  displayDashboards = false;
  displayManageEmpPages = false;
  displayManageHomePage = false;
  displayManageSellPage = false;
  displayHomePage = false;
  currentRole: any;

  constructor(private service: AuthService, private router: Router) { }
  ngDoCheck(): void {
    if (this.router.url == '/login') {
      this.displayMenu = false;
    } else {
      this.displayMenu = true;
    }
  }
  loggedIn() {
    //return (this.service.isLoggedIn());
    return localStorage.getItem('token');
  }
  onLogout() {
    localStorage.removeItem('token');
  }
  ngOnInit(): void {
    this.service.updatedMenu.subscribe(res => {
      this.MenuDisplay();
    })
    this.MenuDisplay();
  }

  MenuDisplay() {
    if (this.service.getToken() != '') {
      this.currentRole = this.service.GetRoleByToken(this.service.getToken());
      this.displayDashboards = (this.currentRole == 'Analyst' || this.currentRole == 'Superuser');
      this.displayManageEmpPages = (this.currentRole == 'HR' || this.currentRole == 'Superuser');
      this.displayManageHomePage = this.currentRole == 'Superuser';
      this.displayManageSellPage = (this.currentRole == 'Sales' || this.currentRole == 'Superuser');
      this.displayHomePage = (this.currentRole == 'Analyst' || this.currentRole == 'Superuser');
    }
  }

}
