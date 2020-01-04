import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.page.html',
  styleUrls: ['./sentences.page.scss'],
})
export class SentencesPage implements OnInit {
  sentences = [
    'I can see my mom.',
    'We have to go with dad.',
    'We like to go play.',
    'We have to play.',
    'Where can we play?',
    'Here you go mom.',
    'Where can we go, she said.',
    'H'
  ];
  constructor() { }

  ngOnInit() {
  }

}
