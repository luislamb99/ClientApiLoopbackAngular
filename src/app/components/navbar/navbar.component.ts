import {Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public app_name = 'Book Store';

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  onLogout(): void {
    this.authService.logoutUser();
  }

}
