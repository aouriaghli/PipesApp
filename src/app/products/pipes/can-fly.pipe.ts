import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class canFlyPipe implements PipeTransform {
  transform(value: boolean): string {  // puedo cambiar string por 'vuela' : 'no vuela' pq realmente solo puede devolver esos dos valores
    return value ? 'vuela' : 'no vuela';
  }
}
