import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideMenuPageComponent } from './admin-side-menu-page.component';

describe('AdminSideMenuPageComponent', () => {
  let component: AdminSideMenuPageComponent;
  let fixture: ComponentFixture<AdminSideMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSideMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSideMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
