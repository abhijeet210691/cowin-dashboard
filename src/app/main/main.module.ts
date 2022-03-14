import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerChartsComponent } from './banner-charts/banner-charts.component';
import { TotalVaccineComponent } from './total-vaccine/total-vaccine.component';
import { StateVaccinationComponent } from './state-vaccination/state-vaccination.component';
import { VaccinationTrendsComponent } from './vaccination-trends/vaccination-trends.component';
import { VaccinationByGenderComponent } from './vaccination-by-gender/vaccination-by-gender.component';
import { AefiReportComponent } from './aefi-report/aefi-report.component';




@NgModule({
  declarations: [
    DashboardComponent,
    BannerChartsComponent,
    TotalVaccineComponent,
    StateVaccinationComponent,
    VaccinationTrendsComponent,
    VaccinationByGenderComponent,
    AefiReportComponent
  ],
  imports: [
    CommonModule,
   
  ],
  exports: [
    DashboardComponent
  ]
})
export class MainModule { }
