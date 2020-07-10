import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  templateUrl: 'word-structures.component.html',
  styleUrls: [ 'word-structures.component.css']
})
export class WordStructuresComponent implements OnInit {

  category: HTMLAudioElement;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  playAudio(event){
    this.category = new Audio();
    if (event.target.id === 'wordstructures') {
        this.category.src = '/assets/audio/buttons/word-structures.mp3';
    } else {
        this.category.src = '/assets/audio/buttons/' + event.target.id + '.mp3';
    }
    if (this.category.src !== undefined) {
        this.category.load();
        this.category.play();
    }
}

  goBack() {
    this.location.back();
  }

}
