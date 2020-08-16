import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'concat'
})
export class ConcatPipe implements PipeTransform{
  transform(value:any,...fields:string[]):string{
    console.log(value);
    const results:string[] = [];
    for(let field of fields){
      if(value[field] !== undefined){
        results.push(`${field}:${value[field]}`);
      }
    }
    return results.join(', ');
  }
}
