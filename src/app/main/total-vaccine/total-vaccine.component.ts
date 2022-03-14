import { Component, Input, OnInit } from '@angular/core';
import { CowinChartService } from '../cowin-chart.service';

@Component({
  selector: 'app-total-vaccine',
  templateUrl: './total-vaccine.component.html',
  styleUrls: ['./total-vaccine.component.scss']
})
export class TotalVaccineComponent implements OnInit {
  registerTodayList: any;
  topBlock: any;
  stateNameData: any;
  totalVaccine: any;
  Dose1: any;
  Dose2: any;
  DoseP: any;
  totalSites: any;
  govSites: any;
  pvtSites: any;
  totalRegistration: any;
  age15_17: any;
  age18_45: any;
  age45_above: any;
  ageWiseBlock: any;
  @Input() trends: any;
  @Input() currentDistrict: any;
  @Input() currentSessionDistrict:any;
  @Input() currentSessionState:any;

  constructor(private cowinData: CowinChartService) {
    this.cowinData.listen().subscribe((m: any) => {
      this.onFilterClick(m);
    });
    this.cowinData.listenDistrict().subscribe((a: any) => {
      this.onFilterClickDistrict(a);
    });
  }


  ngOnInit(): void {
    this.cowinData.registerToday().subscribe((res: any) => {
      this.registerTodayList = res.topBlock;
      this.totalVaccine = this.registerTodayList.vaccination.total;
      this.Dose1 = this.registerTodayList.vaccination.tot_dose_1;
      this.Dose2 = this.registerTodayList.vaccination.tot_dose_2;
      this.DoseP = this.registerTodayList.vaccination.tot_pd;

      //Sites
      this.totalSites = this.registerTodayList.sites.total;
      this.govSites = this.registerTodayList.sites.govt;
      this.pvtSites = this.registerTodayList.sites.pvt;

      //Age
      this.totalRegistration = this.registerTodayList.registration.total;
      this.age15_17 = this.registerTodayList.registration.cit_15_17;
      this.age18_45 = this.registerTodayList.registration.cit_18_45;
      this.age45_above = this.registerTodayList.registration.cit_45_above;
      this.stateNameData = res.getBeneficiariesGroupBy;
    })
  }
  onFilterClick(event: any) {
    if (event == null) {
      this.totalVaccine = this.registerTodayList.vaccination.total;
      this.Dose1 = this.registerTodayList.vaccination.tot_dose_1;
      this.Dose2 = this.registerTodayList.vaccination.tot_dose_2;
      this.DoseP = this.registerTodayList.vaccination.tot_pd;
    } else {
      console.log('Fire onFilterClick: ', event);
      this.stateNameData.forEach((state: any) => {
        if (event == state.state_name) {
          this.totalVaccine = state.total;
          this.Dose1 = state.partial_vaccinated;
          this.Dose2 = state.totally_vaccinated;
          this.DoseP = state.precaution_dose;

          // sites
          setTimeout(() => {
            this.totalSites = this.currentSessionState.total_sites;
            this.govSites = this.currentSessionState.govt_sites;
            this.pvtSites = this.currentSessionState.pvt_sites;
          }, 200);
          
        }
      });
    }
  }

  onFilterClickDistrict(event: any) {
    setTimeout(() => {
      console.log(this.currentDistrict, 'event')
      this.totalVaccine = this.currentDistrict.total;
      this.Dose1 = this.currentDistrict.tot_dose_1;
      this.Dose2 = this.currentDistrict.tot_dose_2;
      this.DoseP = this.currentDistrict.tot_pd;
      //Sites
      this.totalSites = this.currentSessionDistrict.total_sites;
      this.govSites = this.currentSessionDistrict.govt_sites;
      this.pvtSites = this.currentSessionDistrict.pvt_sites;

      //Age
      this.ageWiseBlock = document.getElementById('agewise');
      console.log(this.ageWiseBlock);
      this.ageWiseBlock.style.display = 'none';
    }, 200);
  }


}
