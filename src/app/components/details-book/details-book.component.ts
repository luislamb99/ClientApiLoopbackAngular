import { Component, OnInit } from '@angular/core';
import {DataApiService} from "../../services/data-api.service";
import { ActivatedRoute, Params } from "@angular/router";
import {BookInterface} from "../../models/book-interface";

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  private book: BookInterface = {
    titulo: '',
    idioma: '',
    descripcion: '',
    portada: '',
    precio: '',
    link_amazon: '',
    autor: '',
    oferta: '',
    id: ''
  };
  constructor( private dataApi: DataApiService, private route: ActivatedRoute ) { }

  ngOnInit() {
    const book_id = this.route.snapshot.params['id'];
    this.getDetails( book_id );
  }

  getDetails( id: string ) {
    this.dataApi.getBookById( id )
      .subscribe( (book: any) => {
        this.book = book;
    });

  }

}
