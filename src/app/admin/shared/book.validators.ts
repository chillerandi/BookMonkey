import { FormControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { BookStoreService } from '../../shared/book-store.service';

export class BookValidators {

  static isbnFormat(control: FormControl): {
    [error: string]: any
  } {
    if (!control.value) { return null; }

    const isolatedNumbers = control.value.replace(/-/g, '');
    // ACHTUNG!! in der Formartierung des isbnPatterns führen Leerzeichen vor und nach der Pipe zu Fehlern.
    // --> Formatvorlage wird nicht erkannt!!!
    const isbnPattern = /(^\d{10}$)|(^\d{13}$)/;
    return isbnPattern.test(isolatedNumbers) ? null : {
      isbnFormat: { valid: false }
    };
  }

  static atLeastOneAuthor(controlArray: FormArray): { [error: string]: any } {
    const check = controlArray.controls.some(el => {
      return (el.value) ? true : false;
    });
    return check ? null : {
      atLeastOneAuthor: { valid: false }
    };
  }

  static isbnExists(bs: BookStoreService) {
    return function (control: FormControl): Observable<{ [error: string]: any }> {
      return bs.check(control.value)
        .map(exists => (exists === false) ? null : {
          isbnExists: { valid: false }
        });
    };
  }
}
