export class CreatePatientDto {
    readonly patientNumber: number;
    readonly bsn: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly dateOfBirth: Date;
    readonly length: number;
    readonly weight: number;
    readonly clinicalProfile: string;
    readonly diet: string;
}