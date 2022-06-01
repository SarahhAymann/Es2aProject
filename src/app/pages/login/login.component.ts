import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  responseData: any;
  errorMessage: any;

  constructor(private formBuilder: FormBuilder, private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  proceedLogin() {
    this.errorMessage = "";
    /**this.api.getEmp()
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.empName === this.loginForm.value.username && a.empRole === this.loginForm.value.role ;

      });
      if(user){
        alert("Login success");

      }else{
        alert("User not found!!")
      }
    })**/
    if (this.loginForm.valid) {

      this.service.proceedLogin(this.loginForm.value)
        .subscribe((res) => {
          if (res != null) {
            this.responseData = res;
            localStorage.setItem('token', this.responseData.jwtToken);
            this.service.updatedMenu.next();
            this.router.navigate(['']);
          }
        },
          (error: any) => {
            console.error('error caught in component')
            this.errorMessage = error;
            throw error;
          }

        )
    }
  }
}

