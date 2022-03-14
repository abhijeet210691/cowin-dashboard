import { Component, OnInit } from '@angular/core';
import { CowinChartService } from '../cowin-chart.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private cowinChart: CowinChartService) { }
  stateNameData: any
  stateName: any;
  stateID: any;
  filterData: any;
  filter: any
  districtName: any;
  filterDistrict: any;
  districtID: any;
  newDate: any = new Date;;
  todaysDate: any;
  currentYear: any;
  currentMonth: any;
  currentDate: any;
  disrtictSites: any;
  allStateData: any;

  districtData: any;
  districtWiseData: any;
  stateSites: any;

  stateVaccinebyTime: any;
  stateVaccinebyAge: any;
  stateVaccinebyGende: any;
  stateTotalByAge: any;

  districtVaccineByTime: any;
  districtVaccineByAge: any;
  districtVaccinebyGender:any;
  districtTotalByAge:any;

  ngOnInit(): void {
    this.cowinChart.registerToday().subscribe((res: any) => {
      this.stateNameData = res.getBeneficiariesGroupBy;
    });

    this.filterData = document.getElementById('stateNames');
    this.filterData.addEventListener('change', () => {
      this.stateName = this.filterData.value
      this.clickFilter(this.stateName);
    });

    this.currentYear = this.newDate.getFullYear();
    this.currentMonth = this.newDate.getMonth() + 1;
    this.currentDate = this.newDate.getDate();
    this.todaysDate = this.currentYear + '-0' + this.currentMonth + '-0' + this.currentDate
  }

  clickFilter(stateName: any): void {
    this.cowinChart.filter(stateName);
    this.stateNameData.forEach((state: any) => {
      if (this.stateName == state.state_name) {
        this.stateID = state.id
        this.cowinChart.getDistrictsByState(this.stateID).subscribe((res: any) => {
          this.districtData = res.districts;
        });

        this.cowinChart.getStateData(this.stateID).subscribe((res: any) => {
          this.allStateData = res;
          this.stateSites = res.sessionSiteData;
          this.stateVaccinebyTime = res.vaccinationDoneByTime;
          this.stateVaccinebyAge = res.vaccinationDoneByTimeAgeWise;
          this.stateVaccinebyGende = res.topBlock.vaccination;
          this.stateTotalByAge = res.vaccinationByAge;
          console.log(res);
        })
      }
    });
  }

  districtFilter(va: any): void {
    this.cowinChart.filterDistrict(va)
    this.districtData.forEach((disName: any) => {
      if (va.value == disName.district_name) {
        this.districtID = disName.district_id;
      }
    });
    this.cowinChart.getDistrictDataByTodaysDate(this.stateID, this.districtID, this.todaysDate).subscribe((res: any) => {
      this.districtWiseData = res.topBlock.vaccination;
      this.disrtictSites = res.sessionSiteData;
      this.districtVaccineByTime = res.vaccinationDoneByTime;
      this.districtVaccineByAge = res.vaccinationDoneByTimeAgeWise;
      this.districtVaccinebyGender = res.topBlock.vaccination;
      this.districtTotalByAge = res.vaccinationByAge;
    });
  }




}



