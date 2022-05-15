import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetNameService } from './get-name.service';

@ApiTags('api리스트')
@Controller()
export class GetNameController {

    constructor(private readonly getNameService: GetNameService) {}

    @Get('hello')
    @ApiOperation({summary: "인사", description : "출력값 : <이름>님. 안녕하세요."})
    @ApiQuery({name : 'name', required : true, description : '인사받을 이름'})
    @ApiResponse({description : 'success', status : 200, type : String })
    sayHello(@Query('name') name : string) {
        return this.getNameService.sayHello(name);
    }

}
