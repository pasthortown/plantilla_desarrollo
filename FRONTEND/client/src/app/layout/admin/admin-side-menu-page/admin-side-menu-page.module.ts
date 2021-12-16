import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSideMenuPageRoutingModule } from './admin-side-menu-page-routing.module';
import { AdminSideMenuPageComponent } from './admin-side-menu-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminSideMenuPageComponent
  ],
  imports: [
    CommonModule,
    AdminSideMenuPageRoutingModule,
    FormsModule
  ],
  providers: []
})
export class AdminSideMenuPageModule { }
