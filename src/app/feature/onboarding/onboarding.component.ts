import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password1: ['', [Validators.required, Validators.minLength(3)]],
    password2: ['', [Validators.required, Validators.minLength(3)]],
    birthDate: ['', []]
  });
  constructor(
    private formBuilder: FormBuilder
  ) { }

  get email() { return this.form.get('email'); }
  get password1() { return this.form.get('password1'); }
  get password2() { return this.form.get('password2'); }
  get birthDate() { return this.form.get('birthDate'); }

  ngOnInit(): void {
  }

  submit(focus: HTMLInputElement) {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    } else {
      // dispatch an action or whatever.
      this.form.reset();
      focus.focus();
    }
  }
}
