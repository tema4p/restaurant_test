import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReserveFormPage } from './reserve-form.page';

describe('ReserveFormPage', () => {
  let component: ReserveFormPage;
  let fixture: ComponentFixture<ReserveFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReserveFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
