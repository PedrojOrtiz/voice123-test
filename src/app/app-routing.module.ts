import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'actor-list', loadChildren: () => import('./components/pages/actors/actor-list/actor-list.module').then(m => m.ActorListModule) },
  { path: 'actor-details/:id', loadChildren: () => import('./components/pages/actors/actor-details/actor-details.module').then(m => m.ActorDetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
