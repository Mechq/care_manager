import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PatientModule} from "./patient/patient.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [PatientModule,
  MongooseModule.forRoot('mongodb+srv://FitnessAdmin:zb5XDSwaX2b@fitness-app.u7flq.mongodb.net/care_manager')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
