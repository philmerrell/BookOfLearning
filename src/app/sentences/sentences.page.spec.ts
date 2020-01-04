import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SentencesPage } from './sentences.page';

describe('SentencesPage', () => {
  let component: SentencesPage;
  let fixture: ComponentFixture<SentencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentencesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SentencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
