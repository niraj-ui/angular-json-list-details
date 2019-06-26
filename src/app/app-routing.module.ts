import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListDetailComponent } from './list-detail/list-detail.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'list-details/:id',component:ListDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
