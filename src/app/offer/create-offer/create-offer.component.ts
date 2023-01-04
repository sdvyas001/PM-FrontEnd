import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {  ViewChild, ElementRef } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
//import { jsPDF } from 'jspdf';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  NgModel,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
//import * as uuid from 'uuid';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import {OfferServiceService} from 'src/app/offer/offer-service.service'
import { IconSetService } from '@coreui/icons-angular';
import { cilListNumbered, cilPaperPlane, brandSet } from '@coreui/icons';

const PDF_EXTENSION = '.pdf';
export class Country {
  constructor(public name: string, public id:any, public code: string,public iconSet: IconSetService) {
    iconSet.icons = { cilListNumbered, cilPaperPlane, ...brandSet };
  }
}

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss']
})
export class CreateOfferComponent implements OnInit {

  @ViewChild('printDocid') div!: ElementRef<HTMLTableElement>;
  //myId = uuid.v4();

  model: any;
  options: string[] = ['One', 'Two', 'Three'];
  myControl = new FormControl('');
  filteredOptions: Observable<string[]> | undefined;
  addRow: boolean = false;
  addSecondRow: boolean = false;
  parentOfferList:Country[];

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  //offerFamilyNameList: any = ['Family-1', 'Family-2', 'Family-3']
  offerFamilyNameList = [
    { id: 1, display: 'Family-1' },
    { id: 2, display: 'Family-2' },
    { id: 3, display: 'Family-3' },
  ];

  offerTypeList: any = [
    { id: 1, display: 'Base Offer' },
    { id: 2, display: 'Add-On Offer' },
    { id: 3, display: 'Voucher' },
    { id: 4, display: 'Promotions' },
    { id: 5, display: 'Devices' },
    { id: 6, display: 'Retention' },
  ];
  offeringTypeList: any = [
    { id: 1, display: 'Prepaid' },
    { id: 2, display: 'Postpaid' },
    { id: 3, display: 'Hybrid' },
  ];
  offerLifecycleTypeList: any = [
    { id: 1, display: 'One Time' },
    { id: 2, display: 'Recurring' },
    { id: 3, display: 'Hourly One Time' },
  ];
  offerChannelList: any = [
    { id: 1, display: 'channel-1' },
    { id: 2, display: 'channel-2' },
    { id: 3, display: 'channel-3' },
  ];
  offerIdentifierList: any = [
    { id: 1, display: 'MSISDN' },
    { id: 2, display: 'STB Number' },
    { id: 3, display: 'Unique Number' },
  ];
  offerRelationshipList: any = [
    { id: 1, display: 'Offer Relationship-1' },
    { id: 2, display: 'Offer Relationship-2' },
    { id: 3, display: 'Offer Relationship-3' },
  ];
  notificationTypeList: any = [
    { id: 1, display: 'Activation' },
    { id: 2, display: 'Termination' },
    { id: 3, display: '80% Usage Threshold' },
    { id: 4, display: '100% Usage Threshold' },
    { id: 5, display: 'Renewal' },
    { id: 6, display: 'Balance Inquiry' },
    { id: 7, display: 'Upgrade' },
    { id: 8, display: 'Downgrade' },
  ];
  notifcationLanguageList: any = [
    { id: 1, display: 'English' },
    { id: 2, display: 'Hindi' },
  ];
  notificationDeliveryTypeList: any = [
    { id: 1, display: 'Type-1' },
    { id: 2, display: 'Type-2' },
    { id: 3, display: 'Type-3' },
  ];

  datepipe: DatePipe = new DatePipe('en-GB');
  title = 'project01_01';
  offerName: any;
  offerDescription: any;
  offerFamilyName: any = { id: '', display: '' };
  offerFamilyNameSelected: any;
  offerList:any= {name:'',id:''}
  parentOfferSelected:any;
  items:any;
  commercialOfferName: any;
  offerType: any = { id: '', display: '' };
  offerTypeSelected: any;
  offeringType: any = { id: '', display: '' };
  offeringTypeSelected: any;
  offerLifeCycleType: any = { id: '', display: '' };
  offeringLCTSelected: any;
  offerChannel: any = { id: '', display: '' };
  offerChannelSelected: any;
  offerIdentifier: any = { id: '', display: '' };
  offerIDFSelected: any;
  numberOfInstallment: any;
  installmentIfo: any;
  parentOfferName: any;
  offerGrouping: any;
  offerQuantity: any;
  LoyaltyOneTime: any;
  LoyaltyPointsRecurring: any;
  offerRelationship: any = { id: '', display: '' };
  offerRelSelected: any;
  sharedOfferFlag: any = false;
  activationSMSShortCode: any;
  terminationSMSShortCode: any;
  USSDCodes: any;
  attributeName1: any;
  AttributeDescription1: any;
  attributeName2: any;
  AttributeDescription2: any;
  attributeName3: any;
  AttributeDescription3: any;
  notificationType: any = { id: '', display: '' };
  notificationTypeSelected: any;
  notificationLanguage: any = { id: '', display: '' };
  notificationLangSelected: any;
  notificationText: any;
  notificationDelivery: any = { id: '', display: '' };
  notificationDelSelected: any;
  notificationComment: any;
  offerSalesStartDate: any;
  offerSalesStartDateValue: any;
  offerSalesEndDate: any;
  offerSalesEndDateValue: any;
  basicInfo!: FormGroup;
  additionalInfo!: FormGroup;
  chennelInfo!: FormGroup;
  orderingInfo!: FormGroup;
  notificationInfo!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  orderingInfo_step = false;
  notificationInfo_step = false;
  step = 1;
  item='Select Parent Offer';
  //attributeList:any=[{'attributeName':'','attributeDescription':''}]
  attributeList: any = [];
  notificationList: any = [];
  selectedOfferFamilyName: any;

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
  });
  
  constructor(
    private formBuilder: FormBuilder,
     private http: HttpClient,
     private config: NgSelectConfig,
     private offerService: OfferServiceService
  ) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    // set the bindValue to global config when you use the same
    // bindValue in most of the place.
    // You can also override bindValue for the specified template
    // by defining `bindValue` as property
    // Eg : <ng-select bindValue="some-new-value"></ng-select>
    this.config.bindValue = 'value';
    this.countryCtrl = new FormControl();
    this.filteredCountry = this.countryCtrl.valueChanges.pipe(
      startWith(''),
      map((country) =>
        country ? this.filtercountry(country) : this.parentOfferList.slice()
      )
    );
  }

  filtercountry(name: string) {
    let arr = this.parentOfferList.filter(
      (country:any) => country.name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );

    return arr.length ? arr : [{ name: 'No Item found', code: 'null' }];
  }

  ngOnInit() {
    this.basicInfo = this.formBuilder.group({
      offerFamilyName: [''],
      offerName: [
        ''
      ],
      parent:[
       ''
      ],
      offerDescription: [''],
      offerType: [''],
      offerId: [''],
      commercialOfferName: [''],
      offerSalesStartDate: [''],
      offerSalesEndDate: [''],
      offeringType: [''],
      offerLifeCycleType: [''],
      importOffer: [''],
      attachments: [''],
    });
    this.additionalInfo = this.formBuilder.group({
      offerChannel: [''],
      offerIdentifier: [''],
      numberOfInstallment: [''],
      installmentIfo: [''],
      parentOfferName: [''],
      offerGrouping: [''],
      sharedOfferFlag: [''],
      offerQuantity: [''],
      LoyaltyOneTime: [''],
      LoyaltyPointsRecurring: [''],
      offerRelationship: [''],
    });
    this.chennelInfo = this.formBuilder.group({
      activationSMSShortCode: [''],
      terminationSMSShortCode: [''],
      USSDCodes: [''],
    });
    this.orderingInfo = this.formBuilder.group({
      attributeName1: [''],
      AttributeDescription1: [''],
      attributeName2: [''],
      AttributeDescription2: [''],
      attributeName3: [''],
      AttributeDescription3: [''],
      attributeName4: [''],
      AttributeDescription4: [''],
    });

    this.notificationInfo = this.formBuilder.group({
      notificationType: [''],
      notificationLanguage: [''],
      notificationText: [''],
      notificationDelivery: [''],
      notificationComment: [''],
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }
  get personal() {
    return this.basicInfo.controls;
  }
  get education() {
    return this.notificationInfo.controls;
  }
  get address() {
    return this.additionalInfo.controls;
  }
  get ordering() {
    return this.orderingInfo.controls;
  }

  next() {
    if (this.step == 1) {
      this.personal_step = true;
      if (this.basicInfo.invalid) {
        return;
      }
      this.step++;
    } else if (this.step == 2) {
      this.address_step = true;
      if (this.additionalInfo.invalid) {
        return;
      }
      this.step++;
    } else if (this.step == 3) {
      this.education_step = true;
      //if (this.educationalDetails.invalid) { return }
      this.step++;
    } else if (this.step == 4) {
      this.orderingInfo_step = true;
      //if (this.educationalDetails.invalid) { return }
      this.step++;
    }
  }
  previous() {
    this.step--;
    if (this.step == 1) {
      this.personal_step = false;
    }
    if (this.step == 2) {
      this.education_step = false;
    }
  }
  submit() {
    if (this.step == 5) {
      this.education_step = true;
      if (this.notificationInfo.invalid) {
        return;
      }
      const data = {
        // id: this.project.id,
         name: this.offerName,
         description: this.offerDescription,
         sales_start_date: this.offerSalesStartDate,
         sales_end_date: this.offerSalesEndDate,
         parent: {
          id:this.offerList.id
         }
       };
    this.offerService.create(data).subscribe((result)=>{

    })
    }

    if (this.sharedOfferFlag == true) {
      this.sharedOfferFlag = 'Yes';
    } else if (this.sharedOfferFlag == false) {
      this.sharedOfferFlag = 'No';
    }
    localStorage.setItem('offerName', this.offerName);
    localStorage.setItem('offerDescription', this.offerDescription);
    localStorage.setItem(
      'offerFamilyNameSelected',
      this.offerFamilyNameSelected
    );
    localStorage.setItem('commercialOfferName', this.commercialOfferName);
    localStorage.setItem('offerTypeSelected', this.offerTypeSelected);
    localStorage.setItem('offeringTypeSelected', this.offeringTypeSelected);
    localStorage.setItem('offeringLCTSelected', this.offeringLCTSelected);
    localStorage.setItem('offerSalesStartDate', this.offerSalesStartDate);

    localStorage.setItem('offerChannelSelected', this.offerChannelSelected);
    localStorage.setItem('offerIDFSelected', this.offerIDFSelected);
    localStorage.setItem('numberOfInstallment', this.numberOfInstallment);
    localStorage.setItem('installmentIfo', this.installmentIfo);
    localStorage.setItem('parentOfferName', this.parentOfferName);
    localStorage.setItem('offerGrouping', this.offerGrouping);
    localStorage.setItem('offerQuantity', this.offerQuantity);
    localStorage.setItem('LoyaltyOneTime', this.LoyaltyOneTime);
    localStorage.setItem('LoyaltyPointsRecurring', this.LoyaltyPointsRecurring);
    localStorage.setItem('offerRelSelected', this.offerRelSelected);
    localStorage.setItem('sharedOfferFlag', this.sharedOfferFlag);

    localStorage.setItem('activationSMSShortCode', this.activationSMSShortCode);
    localStorage.setItem(
      'terminationSMSShortCode',
      this.terminationSMSShortCode
    );
    localStorage.setItem('USSDCodes', this.USSDCodes);

    localStorage.setItem('attributeName1', this.attributeName1);
    localStorage.setItem('AttributeDescription1', this.AttributeDescription1);
    localStorage.setItem('attributeName2', this.attributeName2);
    localStorage.setItem('AttributeDescription2', this.AttributeDescription2);
    localStorage.setItem('attributeName3', this.attributeName3);
    localStorage.setItem('AttributeDescription3', this.AttributeDescription3);

    localStorage.setItem(
      'notificationTypeSelected',
      this.notificationTypeSelected
    );
    localStorage.setItem(
      'notificationLangSelected',
      this.notificationLangSelected
    );
    localStorage.setItem('notificationText', this.notificationText);
    localStorage.setItem(
      'notificationDelSelected',
      this.notificationDelSelected
    );
    localStorage.setItem('notificationComment', this.notificationComment);
    console.log(this.offerFamilyNameSelected);
  }

  addrow() {
    this.addRow = true;
    if ((this.addRow = true)) {
      this.addSecondRow = true;
    }
  }

  USERS = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'sincere@april.biz',
      phone: '1-770-736-8031 x56442',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'shanna@melissa.tv',
      phone: '010-692-6593 x09125',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'nathan@yesenia.net',
      phone: '1-463-123-4447',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'julianne@kory.org',
      phone: '493-170-9623 x156',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'lucio@annie.ca',
      phone: '(254)954-1289',
    },
    {
      id: 6,
      name: 'Mrs. Dennis',
      email: 'karley@jasper.info',
      phone: '1-477-935-8478 x6430',
    },
  ];

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file,
      });
    }
  }
  downloadPDFFile(): void {
  //  const doc = new jsPDF();

    console.log('Offer start date:' + this.offerSalesStartDate);
    console.log('Offer end date:' + this.offerSalesEndDate);

    localStorage.setItem('offerName', this.offerName);
    localStorage.setItem('offerDescription', this.offerDescription);
    localStorage.setItem(
      'offerFamilyNameSelected',
      this.offerFamilyNameSelected
    );
    localStorage.setItem('commercialOfferName', this.commercialOfferName);
    localStorage.setItem('offerTypeSelected', this.offerTypeSelected);
    localStorage.setItem('offeringTypeSelected', this.offeringTypeSelected);
    localStorage.setItem('offeringLCTSelected', this.offeringLCTSelected);

    localStorage.setItem('offerChannelSelected', this.offerChannelSelected);
    localStorage.setItem('offerIDFSelected', this.offerIDFSelected);
    localStorage.setItem('numberOfInstallment', this.numberOfInstallment);
    localStorage.setItem('installmentIfo', this.installmentIfo);
    localStorage.setItem('parentOfferName', this.parentOfferName);
    localStorage.setItem('offerGrouping', this.offerGrouping);
    localStorage.setItem('offerQuantity', this.offerQuantity);
    localStorage.setItem('LoyaltyOneTime', this.LoyaltyOneTime);
    localStorage.setItem('LoyaltyPointsRecurring', this.LoyaltyPointsRecurring);
    localStorage.setItem('offerRelSelected', this.offerRelSelected);
    localStorage.setItem('sharedOfferFlag', this.sharedOfferFlag);

    localStorage.setItem('activationSMSShortCode', this.activationSMSShortCode);
    localStorage.setItem(
      'terminationSMSShortCode',
      this.terminationSMSShortCode
    );
    localStorage.setItem('USSDCodes', this.USSDCodes);

    localStorage.setItem('attributeName1', this.attributeName1);
    localStorage.setItem('AttributeDescription1', this.AttributeDescription1);
    localStorage.setItem('attributeName2', this.attributeName2);
    localStorage.setItem('AttributeDescription2', this.AttributeDescription2);
    localStorage.setItem('attributeName3', this.attributeName3);
    localStorage.setItem('AttributeDescription3', this.AttributeDescription3);

    localStorage.setItem(
      'notificationTypeSelected',
      this.notificationTypeSelected
    );
    localStorage.setItem(
      'notificationLangSelected',
      this.notificationLangSelected
    );
    localStorage.setItem('notificationText', this.notificationText);
    localStorage.setItem(
      'notificationDelSelected',
      this.notificationDelSelected
    );
    localStorage.setItem('notificationComment', this.notificationComment);
    //localStorage.clear();
    // doc.html(this.div.nativeElement, {
    //   windowWidth: document.body.clientWidth,
    //   x: 0,
    //   y: 4,
    //   width: 500,
    //   margin: 5,
    //   callback: (doc: jsPDF) => {
    //     doc.save('USERS__' + new Date().getTime() + PDF_EXTENSION);
    //   },
    // });
  }
  addOfferStartDate(event: MatDatepickerInputEvent<Date>) {
    this.offerSalesStartDateValue = this.datepipe.transform(
      event.value,
      'dd/MM/yyyy'
    );
  }
  addOfferEndDate(event: MatDatepickerInputEvent<Date>) {
    this.offerSalesEndDateValue = this.datepipe.transform(
      event.value,
      'dd/MM/yyyy'
    );
  }

  add() {
    this.attributeList.push({
      attributeName: this.attributeName1,
      attributeDescription: this.AttributeDescription1,
    });
    console.log(this.attributeList);
    this.attributeName1 = '';
    this.AttributeDescription1 = '';
  }

  addNotification() {
    this.notificationList.push({
      notificationType: this.notificationTypeSelected + '',
      notificationLanguage: this.notificationLangSelected + '',
      notificationText: this.notificationText,
      notificationDelivery: this.notificationDelSelected + '',
      notificationComment: this.notificationComment,
    });
    //console.log(this.notificationList);
  }

  deleteAttribute(i: any) {
    let specRow = i;
    for (i = 0; i < this.attributeList.length; i++) {
      if (specRow == i) {
        this.attributeList.splice(specRow, 1);
      }
    }
  }

  deleteNotification(i: any) {
    let specRow = i;
    for (i = 0; i < this.notificationList.length; i++) {
      if (specRow == i) {
        this.notificationList.splice(specRow, 1);
      }
    }
  }

  searchParentOffer(){
    this.offerService.getParentOffer().subscribe((result)=>{
      this.parentOfferList=result;
    })
  }
  length: number;

  countryCtrl: FormControl;

  filteredCountry: Observable<any[]>;

  // country_lis: Country[] = [
  //   { name: 'Afghanistan', code: 'AF' },
  //   { name: 'Åland Islands', code: 'AX' },
  //   { name: 'Albania', code: 'AL' },
  //   { name: 'Algeria', code: 'DZ' },
  //   { name: 'American Samoa', code: 'AS' },
  //   { name: 'AndorrA', code: 'AD' },
  //   { name: 'Angola', code: 'AO' },
  //   { name: 'Anguilla', code: 'AI' },
  //   { name: 'Antarctica', code: 'AQ' },
  //   { name: 'Antigua and Barbuda', code: 'AG' },
  //   { name: 'Argentina', code: 'AR' },
  //   { name: 'Armenia', code: 'AM' },
  //   { name: 'Aruba', code: 'AW' },
  // ];

  

  private jsonURL = '/src/app/countries.json';
  

}
