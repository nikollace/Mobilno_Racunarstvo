import { Component } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent {
  text='quote';
  author='author';
  fullQuote='full quote';

  onAddQuote() {
    console.log('Quote added.');
    this.fullQuote=`${this.text} - ${this.author}`;
  }
}
