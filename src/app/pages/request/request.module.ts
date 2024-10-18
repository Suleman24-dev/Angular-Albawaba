import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { ProjectsComponent } from 'src/app/modules/profile/projects/projects.component';
import { ProjectRequestComponent } from './ProjectRequest/ProjectRequest.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RequestRoutingModule,
    ProjectRequestComponent
  ]
})
export class RequestModule { }
