import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReserveListPage } from './reserve-list.page';

describe('ReserveListPage', () => {
  let component: ReserveListPage;
  let fixture: ComponentFixture<ReserveListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReserveListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
