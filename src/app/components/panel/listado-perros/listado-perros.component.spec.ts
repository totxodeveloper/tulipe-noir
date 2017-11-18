import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPerrosComponent } from './listado-perros.component';

describe('ListadoPerrosComponent', () => {
  let component: ListadoPerrosComponent;
  let fixture: ComponentFixture<ListadoPerrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPerrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
