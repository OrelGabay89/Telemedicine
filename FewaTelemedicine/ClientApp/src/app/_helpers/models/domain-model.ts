

export class Practice {
    practiceId: number;
    name: string = "";
    address: string = "";
    contactNumber: number;
    description: string = "";
    callingPlatform: string;
    url: any = "";
    email: string = "";
    logoPath: any;

    // email configration 
    emailApiKey: any = "";
    emailApiName: string = "";
    emailPlainBody: string = "";
    emailSubject: string = "";
    emailHtmlBody: any = "";
    emailAdditionalContent: string = "";
    emailMessage: string = "";

    // sms configration
    smsApiAccountSID: any = "";
    smsApiAuthToken: any = "";
    smsPhoneNumber: number;
    serverName: string = "";

}
export class Provider {
    providerId: number;
    userName: string = "";
    password: any = "";
    nameTitle: string = "";
    name: string;
    email: string = "";
    designation: string = "";
    medicalDegree: string = "";
    mobileNumber: number;
    clinic: string = "";
    image: File;
    roomName: string = "";
    roomKey: string;
    callingPlatform: string = "";
    practice: any = "";
    url: any = "";
    newPassword: string = "";
    confirmedPassword: string = "";
    otp: string = "";
}
export class Patient {
    patientId: number;
    name: string = "";
    appointmentDate: Date;
    startTime: Date;
    endTime: Date;
    providerNameAttending: string;
    status: number;
    lastUpdated: Date;
    totalCheckupTime: Date;
    email: string = "";
    mobileNumber: string = "";
    labOrdersSent: Boolean = false;
    newPrescriptionsSentToYourPharmacy: boolean = false;
    newPrescriptionsMailedToYou: boolean = false;
    followUpNumber: string = "";
    followUpMeasure: string = "";
    message: string = "";
    medication: string = "";
    callingPlatform: string = "";
    practice: any = "";
    url: any = "";
    provider: Provider;
}
export class ProviderCabin {
    public patient: Patient;
    public provider: Provider;
}
