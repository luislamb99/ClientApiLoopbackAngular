import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {UserInterface} from "../../../models/user-interface";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user: UserInterface = {
    name: '',
    email: '',
    password: ''
  } ;

  error: boolean;
  mensajeError: string;

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {}

  onRegister(): void {
    this.error = false;
    this.authService.registerUser(
      this.user.name,
      this.user.email,
      this.user.password
    ).subscribe( user => {
      // console.log(user);
      this.authService.setUser(user);
      let token = user.id;
      // console.log(token);
      this.authService.setToken(token);
      this.router.navigate(['/user/profile']);
    }, error => {
      this.mensajeError = error.error.error.message;
      this.error = true;
    });
  }

}
