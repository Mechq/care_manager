import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PatientDocument = HydratedDocument<Patient>;

@Schema({timestamps: true})
export class Patient {
    @Prop({required: true, unique: true})
    patientNumber: number

    @Prop()
    bsn: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    dateOfBirth: Date;

    @Prop()
    length: number;

    @Prop()
    weight: number;

    @Prop()
    clinicalProfile: string;

    @Prop()
    diet: string;

}

export const PatientSchema = SchemaFactory.createForClass(Patient);