import { Component, OnInit, ViewChild } from '@angular/core';
import {ElementRef} from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  progressBar: any;
  media: any;
  statPausa: String;
  statPlay: String;
  bucle: any;

  constructor() {
    this.statPlay = '';
    this.statPausa = 'oculto';
  }

  ngOnInit() {
    this.progressBar = document.querySelector('progress');
    this.media = document.querySelector('video');
    this.progressBar.value = 0;
  }
  changeState() {
    if (this.media.ended) {
      this.play();
    } else if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  play() {
    this.media.play();
    this.statPlay = 'oculto';
    this.statPausa = '';
    this.bucle = window.setInterval(this.updateProgress.bind(this), 1000);
  }
  pause() {
    window.clearInterval(this.bucle);
    this.media.pause();
    this.statPlay = '';
    this.statPausa = 'oculto';
  }
  forward() {
    this.media.currentTime += 1;
    this.updateProgress.bind(this);
  }
  backward() {
    this.media.currentTime -= 1;
    this.updateProgress();
  }
  updateProgress() {
    const duration = this.media.duration;
    const actual =  this.media.currentTime;
    const percentage = (actual / duration) * 100;
    this.progressBar.value = percentage;
    if (percentage === 100) {
      this.statPlay = '';
      this.statPausa = 'oculto';
      this.progressBar.value = 0;
      window.clearInterval(this.bucle);
    }
  }
}
