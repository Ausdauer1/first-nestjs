import { Injectable } from '@nestjs/common';

@Injectable()
export class GetNameService {
    
    sayHello(name: string) {
        let realName = name.replace(/['"]/g,'')
        console.log(`${realName}님. 안녕하세요.`)
        return `${realName}님. 안녕하세요.`;
    } 

}
