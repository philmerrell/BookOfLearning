import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sight-words',
  templateUrl: './sight-words.page.html',
  styleUrls: ['./sight-words.page.scss'],
})
export class SightWordsPage implements OnInit {
  words = [
    'I', 'can', 'we', 'the', 'like', 'a', 'am', 'see', 'go', 'to',
    'have', 'at', 'is', 'play', 'are', 'for', 'you', 'this', 'do',
    'and', 'what', 'little', 'said', 'here', 'was', 'he', 'she', 'has',
    'look', 'my', 'with', 'me', 'of', 'mom', 'dad', 'where'
  ];
  constructor() { }

  ngOnInit() {
  }

}
