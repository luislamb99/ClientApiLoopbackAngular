import { Component, OnInit } from '@angular/core';
import {DataApiService} from "../../../services/data-api.service";
import {BookInterface} from "../../../models/book-interface";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  private books: BookInterface;

  constructor( private dataApi: DataApiService ) { }

  ngOnInit() {
    this.getListBooks();
  }

  getListBooks(): void {
    this.dataApi.getAllBooks()
      .subscribe( (data: BookInterface) => {
        this.books = data;
        // console.log(data);
      });
  }

  onDeleteBook(id: string ) {
    if (confirm('Are you to delete?')) {
      this.dataApi.deleteBook(id).subscribe();
    }
  }

  onPreUpdate(book: BookInterface): void {
    this.dataApi.selectedBook = Object.assign({}, book);
  }

  resetForm(): void {
    this.dataApi.selectedBook = {
      id: null,
      titulo: '',
      idioma: '',
      descripcion: '',
      portada: '',
      precio: '',
      link_amazon: '',
      autor: '',
      oferta: ''
    };
  }

}
