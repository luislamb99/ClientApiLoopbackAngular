import { Component, OnInit } from '@angular/core';
import {DataApiService} from "../../services/data-api.service";
import {BookInterface} from "../../models/book-interface";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  private books: BookInterface;
  constructor( private dataApi: DataApiService ) { }

  ngOnInit() {
    this.dataApi.getOffers()
      .subscribe( ( offers: BookInterface ) => {
        this.books = offers;
      });
  }

}
