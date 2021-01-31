import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import {NgxPaginationModule} from 'ngx-pagination';

const myComponents = [ActorDetailsComponent, ActorListComponent];


@NgModule({
  declarations: [... myComponents],
  imports: [
    CommonModule, NgxPaginationModule
  ],
  exports: [... myComponents]
})
export class ActorsModule { }
