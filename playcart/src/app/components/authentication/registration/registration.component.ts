import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { FetchStaticDataService } from 'src/app/services/fetch-static-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRelatedService } from 'src/app/services/user-related.service';

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
  rf: FormGroup;
  constructor(
    private fetchStaticDataService: FetchStaticDataService,
    private userRelatedService: UserRelatedService
    ) { 
    this.rf = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
      phonecode: new FormControl('', Validators.compose([Validators.required])),
      phonenumber: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  ngOnInit() {
    this.fetchStaticDataService.getCountryCodes().subscribe(countryCode => {
      this.countryCode = countryCode;
    });
  }

  createUserAccount() {
    this.userRelatedService.initiateCreateUserAccount().subscribe(
      data => console.log(data)
    );
  }

}
