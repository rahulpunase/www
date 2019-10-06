import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { FetchStaticDataService } from 'src/app/services/fetch-static-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {

  /**
   * Country code along with the name and id
  */
  countryCode: Array<Country> = [];
  constructor(private fetchStaticDataService: FetchStaticDataService) { }

  ngOnInit() {
    this.fetchStaticDataService.getCountryCodes().subscribe(countryCode => {
      this.countryCode = countryCode;
    });
  }

}
