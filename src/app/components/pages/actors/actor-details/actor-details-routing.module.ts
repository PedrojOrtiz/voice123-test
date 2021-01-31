import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorDetailsComponent } from './actor-details.component';

const routes: Routes = [{ path: '', component: ActorDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorDetailsRoutingModule { }
