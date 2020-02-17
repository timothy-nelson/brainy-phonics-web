import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlphabetLetter} from '../../types/alphabet-letter';
import {Router} from '@angular/router';
import {TransferLetterService} from '../../services/transfer-letter-service.service';

@Component({
    selector: 'app-alphabet-learn',
    templateUrl: './alphabet-learn.component.html',
    styleUrls: ['./alphabet-learn.component.css', '../../main.css']
})

export class AlphabetLearnComponent implements OnInit, OnDestroy {
    letterAnimate: boolean;
    letterPlayAudio: boolean;
    letterAudio: HTMLAudioElement;

    letter: AlphabetLetter;
    location: any;

    constructor(private transferService: TransferLetterService, private router: Router) {
        this.letter = this.transferService.getData() as AlphabetLetter;
        if (!this.letter) {
            this.router.navigateByUrl('/alphabet-list-all');
        }

        //audio
        this.letterAnimate = false;
        this.letterPlayAudio = true;
    }

    ngOnInit() {
        this.letterAudio = new Audio();
        this.letterAudio.src = '/assets/audio/sound-A.mp3';
        this.letterAudio.load();

        this.letterAudio.onended = () => {
            this.letterAnimate = false;
        };

        this.playAudio();
    }

    ngOnDestroy() {
        this.letterAudio.pause();
    }

    playAudio() {
        this.letterAnimate = true;
        this.letterAudio.onended = () => {
            this.letterAnimate = false;
            this.letterAudio.onended = () => {
                this.letterAnimate = false;
            };
        };
        this.letterAudio.play();
    }

    goBack() {
        this.location.back();
    }
}
