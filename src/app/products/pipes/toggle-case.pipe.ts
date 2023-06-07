import { Pipe, PipeTransform } from '@angular/core';

// ayoub | toggleCase = 'AYOUB'
// AYOUB | toggleCase = 'ayoub'

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    console.log({ value, toUpper });
    return (toUpper) ?  value.toUpperCase() : value.toLocaleLowerCase()
  }
}
