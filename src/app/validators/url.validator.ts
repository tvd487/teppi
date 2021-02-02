import {AbstractControl} from '@angular/forms';

export function urlValidator(control: AbstractControl): any {
  if (!control.value.startsWith('https') || !control.value.includes('.me')) {
    return {required: true};
  }
  return null;
}
