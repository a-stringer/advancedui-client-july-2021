import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { OnboardingComponent } from './onboarding.component';



@NgModule({
  declarations: [
    CounterComponent,
    OnboardingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OnboardingModule { }
