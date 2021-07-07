import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordsMatch(passwordField1: string, passwordField2: string): ValidatorFn {
  return (group: AbstractControl) => {
    return group.get(passwordField1)?.value === group.get(passwordField2)?.value ? null : ({
      passwords: 'Passwords don\'t match'
    });
  };
}

export function forbiddenEmail(email: string): ValidatorFn {
  return (control: AbstractControl) => {
    const val = control?.value as string;
    if (val) {
      if (val.toLowerCase().indexOf(email) >= 0) {
        return ({
          forbiddenEmail: true
        })
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

// export function forbiddenEmail(control: AbstractControl) {
//   const val = control?.value as string;
// }
