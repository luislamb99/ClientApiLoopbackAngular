import { Component, OnInit } from '@angular/core';
import {DataApiService} from "../../services/data-api.service";
import { BookInterface } from "../../models/book-interface";
import { NgForm } from "@angular/forms";
import { Location } from "@angular/common"; // Refresh de la vista

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService, private location: Location) { }

  ngOnInit() {
  }

  onSaveBook(bookForm: NgForm): void {
     if (bookForm.value.bookId == null) {
       // New Book
       this.dataApi.saveBook(bookForm.value).subscribe( book => location.reload());
     } else {
       // Update
       this.dataApi.updateBook(bookForm.value).subscribe( book => location.reload());
     }
  }

}
