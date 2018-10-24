import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {UrlSerializer} from "@angular/router";
import {UserInterface} from "../../../models/user-interface";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private user: UserInterface;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    // console.log(this.user);
  }

}
