import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstGradeSightWordsPage } from './first-grade-sight-words.page';

describe('FirstGradeSightWordsPage', () => {
  let component: FirstGradeSightWordsPage;
  let fixture: ComponentFixture<FirstGradeSightWordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstGradeSightWordsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstGradeSightWordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
