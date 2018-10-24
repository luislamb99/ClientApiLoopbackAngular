import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { UserInterface } from "../../../models/user-interface";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: UserInterface = {
    email: '',
    password: ''
  };

  error: boolean;
  mensajeError: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    this.error = false;
    this.authService.loginUser(this.user.email, this.user.password)
      .subscribe( ( data ) => {
        this.authService.setUser( data.user );
        let token = data.id;
        this.authService.setToken( token );
        this.router.navigate(['/user/profile']);
    }, error => {
        this.mensajeError = error.error.error.message;
        this.error = true;
      });
  }

}
