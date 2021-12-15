import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('src/app/layout/dashboard-page/dashboard-page.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('src/app/layout/profile-page/profile-page.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'not-found',
        loadChildren: () => import('src/app/layout/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule)
      },
      {
         path: '**',
         redirectTo: 'not-found'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
