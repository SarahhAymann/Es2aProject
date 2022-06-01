import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit ,DoCheck{

  displayMenu = false;
  displayDashboards = false;
  displayManagePages = false;
  currentRole: any;

  constructor(private service: AuthService,private router:Router) { }
  ngDoCheck(): void {
    if(this.router.url=='/login'){
      this.displayMenu=false;
    }else{
      this.displayMenu=true;
    }
  }

  ngOnInit(): void {
    this.service.updatedMenu.subscribe(res=>{
      this.MenuDisplay();
    })
    this.MenuDisplay();
  }

  MenuDisplay() {
    if (this.service.getToken() != '') {
      this.currentRole = this.service.GetRoleByToken(this.service.getToken());
      this.displayDashboards = (this.currentRole == 'it' || this.currentRole == 'admin');
      this.displayManagePages = this.currentRole == 'admin';
    }
  }

}
