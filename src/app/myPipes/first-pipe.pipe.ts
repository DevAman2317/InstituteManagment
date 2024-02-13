import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstPipe'
})
export class FirstPipePipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    if (value.length > 10) {
      return value.substring(0, 5) + '...';
    }
    return value;
  }

}
