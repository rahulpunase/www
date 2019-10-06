import { Injectable } from '@angular/core';
import { IFetchStaticData } from '../interfaces/IFetchStaticData';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';
import { HttpBaseService } from './http/http-base.service';

@Injectable()
export class FetchStaticDataService implements IFetchStaticData {
  constructor(private httpBaseService: HttpBaseService) { }
  getCountryCodes(): Observable<Array<Country>> {
    return this.httpBaseService._getCountryCodes();
  };
}
