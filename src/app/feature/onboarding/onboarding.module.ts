import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { OnboardingComponent } from './onboarding.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'onboarding',
    component: OnboardingComponent
  }
]


@NgModule({
  declarations: [
    CounterComponent,
    OnboardingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CounterComponent
  ]
})
export class OnboardingModule { }
