export class Offer {
    [x: string]: any; 
    //Offer Basic Info
    offerFamilyName?:string;
    //offerName?:string;
    name?:string;
    //offerDescription?:string;
    description?:any;
    offerType?:string;
    //offerId?:any;
    id:any;
    importOffer?:any;
    commercialOfferName?:string;
    //offerSalesStartDate?:Date;
    sales_start_date?:string;
    //offerSalesEndDate?:Date;
    sales_end_date?:string;
    offeringType?:string;
    offerLifeCycleType?:string;
    attachments?:any;
    parent?:{
        id: 1
    }
    childern?:any;

    //Additional Info
    offerChannel?:any;
    offerIdentifier?:string;
    numberOfInstallments?:number;
    installmentInfo?:string;
    parentOfferName?:string;
    offerGrouping?:any;
    sharedOfferFlag?:boolean;
    offerQuantity?:number;
    loayltyOneTime?:string;
    loayltyPointsRecurring?:string;
    offerRelationship?:any;

    //Channel Info
    activationSMSShortCode?:string;
    terminationSMSShortCode?:string;
    ussdCodes?:string;

    //Ordering Info
    attributeName?:string;
    attributeDescription?:string;

    //Notification Info
    notificationtype?:any;
    notificationLanguage?:any;
    notification?:string;
    notificationDelivery?:any;
    notificationText?:string;
   
}
