import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: 'pets', component: HomeComponent },
  { path: 'new', component: NewComponent },
  { path: 'pets/:id/edit', component: EditComponent },
  { path: 'pets/:id', component: ShowComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pets' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
