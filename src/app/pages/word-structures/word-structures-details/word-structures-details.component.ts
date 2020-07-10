import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  templateUrl: 'word-structures-details.component.html',
  styleUrls: [ 'word-structures-details.component.css']
})
export class WordStructuresDetailsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}