import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;


@Component({
  selector: 'app-first-grade-sight-words',
  templateUrl: './first-grade-sight-words.page.html',
  styleUrls: ['./first-grade-sight-words.page.scss'],
})
export class FirstGradeSightWordsPage implements OnInit {
  firstGradeWordList = [
    'the', 'of', 'and', 'a', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'I', 'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if', 'will', 'up', 'other', 'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'here', 'would', 'make', 'like', 'him', 'into', 'time', 'has', 'look', 'two', 'more', 'write', 'go', 'see', 'number', 'no', 'way', 'could', 'people',
    'my', 'than', 'first', 'water', 'been', 'call', 'who', 'oil', 'now', 'find', 'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part', 'over', 'new', 'sound', 'take', 'only', 'little', 'work', 'know', 'place', 'year', 'live', 'me', 'back', 'give', 'most', 'very', 'after', 'thing', 'our', 'just', 'name', 'good', 'sentence', 'man', 'think', 'say', 'great', 'where', 'help', 'through', 'much', 'before', 'line', 'right', 'too', 'mean', 'old', 'any', 'same', 'tell', 'boy', 'follow', 'came', 'want', 'show', 'also', 'around', 'form', 'three', 'small', 'set'
  ]
  savedWords: string[] = [];
  words = [];
  constructor() { }

  async ngOnInit() {
    this.savedWords = await this.getSavedWords();
    console.log(this.savedWords);
    this.firstGradeWordList = this.shuffleArray(this.firstGradeWordList);
    let wordObjArray = [];
    this.firstGradeWordList.map(word => {
      wordObjArray.push({
        text: word,
        isSaved: (this.isWordSaved(word) > -1)
      });
    });
    this.words = wordObjArray;
  }

  shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async getSavedWords() {
    return await JSON.parse((await Storage.get({key: 'savedWords'})).value) || [];
  }

  isWordSaved(word: string) {
    return this.savedWords.indexOf(word);
  }

  async saveOrRemoveWord(word: any) {
    if (word.isSaved) {
      const index = this.savedWords.findIndex(saved => saved === word);
      this.savedWords.splice(index, 1);
    } else {
      this.savedWords.push(word.text);
    }
      let storageWords = JSON.stringify(this.savedWords);
      await Storage.set({key: 'savedWords', value: storageWords });
      word.isSaved = !word.isSaved;
  }

}
