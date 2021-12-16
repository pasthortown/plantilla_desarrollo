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
      // ADMINISTRACION
      {
        path: 'admin-users',
        loadChildren: () => import('src/app/layout/admin/admin-users-page/admin-users-page.module').then(m => m.AdminUsersPageModule)
      },
      {
        path: 'admin-rols',
        loadChildren: () => import('src/app/layout/admin/admin-rols-page/admin-rols-page.module').then(m => m.AdminRolsPageModule)
      },
      {
        path: 'admin-menu',
        loadChildren: () => import('src/app/layout/admin/admin-side-menu-page/admin-side-menu-page.module').then(m => m.AdminSideMenuPageModule)
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
