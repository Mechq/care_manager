import {Body, Controller, Get, Post} from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from './patient.schema';
import {CreatePatientDto} from "./patient.dto";

@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) {}

    @Get()
    async getAll(): Promise<Patient[]> {
        console.log('Get all patients');
        return this.patientService.getAll();
    }

    @Post()
    async createPatient(@Body() createPatientDto: CreatePatientDto): Promise<Patient> {
        console.log('Create a patient');
        return this.patientService.createPatient(createPatientDto);
    }
}