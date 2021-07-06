import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicListComponent } from './components/basic-list/basic-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'basic-list',
    component: BasicListComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
