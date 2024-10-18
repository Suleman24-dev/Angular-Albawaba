import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectRequestComponent } from './ProjectRequest/ProjectRequest.component';

const routes: Routes = [
  { path: 'project', component: ProjectRequestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
