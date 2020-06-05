import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VistaProductoPage } from './vista-producto.page';

describe('VistaProductoPage', () => {
  let component: VistaProductoPage;
  let fixture: ComponentFixture<VistaProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VistaProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
