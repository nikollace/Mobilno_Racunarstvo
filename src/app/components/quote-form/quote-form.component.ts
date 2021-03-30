import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent {

  text='quote';
  author='author';
  fullQuote='full quote';

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.text = this.route.snapshot.queryParams.text;
    this.author = this.route.snapshot.queryParams.author;
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.text = queryParams.text;
      this.author = queryParams.author;
    })
  }

  onAddQuote() {
    console.log('Quote added.');
    this.fullQuote=`${this.text} - ${this.author}`;
  }
}
