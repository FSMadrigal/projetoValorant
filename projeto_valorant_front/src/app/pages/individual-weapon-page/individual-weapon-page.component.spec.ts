import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualWeaponPageComponent } from './individual-weapon-page.component';

describe('IndividualWeaponPageComponent', () => {
  let component: IndividualWeaponPageComponent;
  let fixture: ComponentFixture<IndividualWeaponPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualWeaponPageComponent]
    });
    fixture = TestBed.createComponent(IndividualWeaponPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
