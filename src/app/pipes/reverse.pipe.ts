import { Pipe, PipeTransform } from '@angular/core';
import { reverse } from 'dns';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value
    .split('').
    reverse().
    join('');
  }

}
