import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from 'src/app/interfaces/country';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpBaseService {

  domainUrl = environment.domainUrl;
  constructor(private http: HttpClient) { }

  _getCountryCodes(): Observable<Array<Country>> {
    return this.http.get <Array<Country>>(this.domainUrl +  '/static/getcountrycodes');
  }
}
