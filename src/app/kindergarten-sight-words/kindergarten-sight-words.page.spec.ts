import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KindergartenSightWordsPage } from './kindergarten-sight-words.page';

describe('KindergartenSightWordsPage', () => {
  let component: KindergartenSightWordsPage;
  let fixture: ComponentFixture<KindergartenSightWordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindergartenSightWordsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KindergartenSightWordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
