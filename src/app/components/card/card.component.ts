import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item: any;

  thumbnail = '';

  title = '';
  subtitle = '-';
  prevUrl: any;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.handleTitle();
  }

  playVideo() {

  }

  handleTitle() {
    const titleArray = this.item.title.split('-');
    this.title = titleArray[0];
    if (titleArray[1]) {
      this.subtitle = titleArray[1];
    }
  }

  setDefaultImage() {
    this.thumbnail = 'assets/images/image-not-found.jpg';
  }

}
