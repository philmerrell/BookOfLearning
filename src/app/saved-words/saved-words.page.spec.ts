import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavedWordsPage } from './saved-words.page';

describe('SavedWordsPage', () => {
  let component: SavedWordsPage;
  let fixture: ComponentFixture<SavedWordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedWordsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedWordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
