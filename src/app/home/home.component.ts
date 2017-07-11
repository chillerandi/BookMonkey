import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-home',
  template: `

  <div class="ui container column">
    <h1>BookMonkey</h1>
    <a routerLink="../books" class="ui red button">
      Buchliste ansehen
      <i class="right arrow icon"></i>
    </a>
    <p></p>
    <div class="ui divider"></div>
    <h3>Suche nach Büchern:</h3>
    <bm-search (bookSelected)="bookSelected($event)" class="column"></bm-search>
  </div>
  `
})
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  bookSelected(book: Book) {
    this.router.navigate(['../books', book.isbn], { relativeTo: this.route });
  }
}
