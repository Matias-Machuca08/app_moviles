import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoUsuariosPage } from './ingreso-usuarios.page';

describe('IngresoUsuariosPage', () => {
  let component: IngresoUsuariosPage;
  let fixture: ComponentFixture<IngresoUsuariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
