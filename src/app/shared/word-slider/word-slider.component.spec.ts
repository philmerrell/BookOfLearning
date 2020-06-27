import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WordSliderComponent } from './word-slider.component';

describe('WordSliderComponent', () => {
  let component: WordSliderComponent;
  let fixture: ComponentFixture<WordSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordSliderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WordSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
