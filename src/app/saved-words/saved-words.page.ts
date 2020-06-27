import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Component({
  selector: 'app-saved-words',
  templateUrl: './saved-words.page.html',
  styleUrls: ['./saved-words.page.scss'],
})
export class SavedWordsPage implements OnInit {
  savedWords = [];
  constructor() { }

  ngOnInit() {
    this.getSavedWords();
  }

  async getSavedWords() {
    this.savedWords = await JSON.parse((await Storage.get({ key: 'savedWords' })).value) || [];
  }

}
