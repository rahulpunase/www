import { Injectable } from '@angular/core';
import { HttpBaseService } from './http/http-base.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserRelatedService {

  constructor(private httpBaseService: HttpBaseService) { }

  initiateCreateUserAccount(): Observable<any> {
    return this.httpBaseService._createUserAccount(); 
  }
}
