import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  templateUrl: 'figures-of-speech-details.component.html',
  styleUrls: [ 'figures-of-speech-details.component.css']
})
export class FiguresOfSpeechDetailsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}