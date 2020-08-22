import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { IonSlides } from '@ionic/angular';

const { Storage } = Plugins;
@Component({
  selector: 'word-slider',
  templateUrl: './word-slider.component.html',
  styleUrls: ['./word-slider.component.scss'],
})
export class WordSliderComponent implements OnInit {
  @Input() words = [];
  @ViewChild(IonSlides, {static: true}) protected slider: IonSlides;
  @Output() wordChange: EventEmitter<string> = new EventEmitter();
  isSaved = false;
  currentIndex = 0;
  savedWords = [];
  constructor() { }

  async ngOnInit() {
    await this.getSavedWords();
    this.checkForSavedWord(0);
  }

  async getActiveIndex(): Promise<number> {
    return this.slider.getActiveIndex();
  }

    async getSavedWords() {
      this.savedWords = await JSON.parse((await Storage.get({key: 'savedWords'})).value) || [];
      console.log(this.savedWords);
    }

  async slideDidChange() {
    this.currentIndex = await this.getActiveIndex();
    this.checkForSavedWord(this.currentIndex);
  }

  checkForSavedWord(index: number) {
    if (this.savedWords && this.savedWords.indexOf(this.words[index]) !== -1) {
      this.isSaved = true;
    } else {
      this.isSaved = false;
    }
  }

  async saveOrRemoveWord(word: string) {
    if (this.isSaved) {
      // remove word...
      const index = this.savedWords.findIndex(saved => saved === word);
      this.savedWords.splice(index, 1);
    } else {
      this.savedWords.push(word);
    }
      let storageWords = JSON.stringify(this.savedWords);
      await Storage.set({key: 'savedWords', value: storageWords });
      this.isSaved = !this.isSaved;
    
  }

}
