import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetApiService } from './services/get-api.service';
import { DetailDepartmentComponent } from './detail-department/detail-department.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home/detail/:id',
    component: DetailDepartmentComponent,
    resolve: {
      detailId: (route: ActivatedRouteSnapshot) => {
        return inject(GetApiService).getSearchById(route.params['id']!);
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
