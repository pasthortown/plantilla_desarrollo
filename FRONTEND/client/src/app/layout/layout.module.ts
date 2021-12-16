import { NgxSpinnerModule } from 'ngx-spinner';
import { CatalogService } from 'src/app/services/catalog.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    NgxSpinnerModule,
    LayoutRoutingModule
  ],
  providers: [
    CatalogService
  ]
})
export class LayoutModule { }
