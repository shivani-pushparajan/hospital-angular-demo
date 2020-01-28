import { AbstractControl } from '@angular/forms';
export function ValidatePassword(control: AbstractControl) {
if (!control.value.endsWith('@123')) {
    return { invalidPassword: true };
  }
return null;
}