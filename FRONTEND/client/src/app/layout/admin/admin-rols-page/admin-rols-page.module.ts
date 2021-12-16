import { CatalogService } from 'src/app/services/catalog.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRolsPageRoutingModule } from './admin-rols-page-routing.module';
import { AdminRolsPageComponent } from './admin-rols-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminRolsPageComponent
  ],
  imports: [
    CommonModule,
    AdminRolsPageRoutingModule,
    FormsModule
  ],
  providers: [
    CatalogService
  ]
})
export class AdminRolsPageModule { }
