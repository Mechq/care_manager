import {Injectable} from '@nestjs/common';
import {Patient} from './patient.schema';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {CreatePatientDto} from "./patient.dto";

@Injectable()
export class PatientService {
    constructor(@InjectModel(Patient.name) private patientModel: Model<Patient>) {}

    async getAll(): Promise<Patient[]> {
        const result = await this.patientModel.find().exec();
        console.log('Get all patients', result);
        return result;
    }

    async createPatient(createPatientDto: CreatePatientDto): Promise<Patient> {
        const newPatient = new this.patientModel(createPatientDto);
        const result = await newPatient.save();
        console.log('Create a patient', result);
        return result;
    }
}