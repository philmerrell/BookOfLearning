import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SightWordsPage } from './sight-words.page';

describe('SightWordsPage', () => {
  let component: SightWordsPage;
  let fixture: ComponentFixture<SightWordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SightWordsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SightWordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
