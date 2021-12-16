import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRolsPageComponent } from './admin-rols-page.component';

describe('AdminRolsPageComponent', () => {
  let component: AdminRolsPageComponent;
  let fixture: ComponentFixture<AdminRolsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRolsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
