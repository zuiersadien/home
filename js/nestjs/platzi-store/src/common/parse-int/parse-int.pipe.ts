import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {

  transform(value:string, metadata: ArgumentMetadata) {
    const val=parseInt(value,10)
    if(isNaN(Number(value))){
        throw new BadRequestException(`${value} is not a number`)
        
    }
    return value;
  }
}
