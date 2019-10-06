import { Observable } from 'rxjs';
import { Country } from './country';

export interface IFetchStaticData {
    getCountryCodes(): Observable<Array<Country>>;
}