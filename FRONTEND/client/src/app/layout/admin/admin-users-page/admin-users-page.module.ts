import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUsersPageRoutingModule } from './admin-users-page-routing.module';
import { AdminUsersPageComponent } from './admin-users-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminUsersPageComponent
  ],
  imports: [
    CommonModule,
    AdminUsersPageRoutingModule,
    FormsModule
  ],
  providers: []
})
export class AdminUsersPageModule { }
