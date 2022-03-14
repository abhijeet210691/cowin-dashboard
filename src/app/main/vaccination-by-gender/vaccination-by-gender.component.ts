import { Component, Input, OnInit } from '@angular/core';
import { CowinChartService } from '../cowin-chart.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-vaccination-by-gender',
  templateUrl: './vaccination-by-gender.component.html',
  styleUrls: ['./vaccination-by-gender.component.scss']
})
export class VaccinationByGenderComponent implements OnInit {
  vaccineByGender: any;
  genderChart: any;
  genderData: any = [];
  genderGraph: any;

  //By Type
  vaccineByType: any;
  typeChart: any;
  typeData: any = [];
  typeGraph: any;

  //By Age
  vaccineByAge: any;
  ageChart: any;
  ageData: any = [];
  ageGraph: any;
  age_15_17: any;
  age_18_45: any;
  age_45_60: any;
  ageAbove_60: any;
  constructor(private cowinData: CowinChartService) {
    this.cowinData.listen().subscribe((m: any) => {
      this.onFilterClick(m);
    });
    this.cowinData.listenDistrict().subscribe((a: any) => {
      this.onFilterClickDistrict(a);
    });
  }

  @Input() currentVaccineGender: any;
  @Input() currentTotalByAge:any;
  @Input() currentDistrictGender:any;
  @Input() currentDistrictByAge:any;

  ngOnInit(): void {
    this.cowinData.registerToday().subscribe((res: any) => {
      this.vaccineByGender = res.topBlock.vaccination;
      this.genderData.push(this.vaccineByGender.male);
      this.genderData.push(this.vaccineByGender.female);
      this.genderData.push(this.vaccineByGender.others)

      // By Type
      this.vaccineByType = res.topBlock.vaccination;
      this.typeData.push(this.vaccineByType.covaxin);
      this.typeData.push(this.vaccineByType.covishield);
      this.typeData.push(this.vaccineByType.sputnik);

      //By Age
      this.vaccineByAge = res.vaccinationByAge;
      this.age_15_17 = this.vaccineByAge.vac_15_17;
      this.age_18_45 = this.vaccineByAge.vac_18_45;
      this.age_45_60 = this.vaccineByAge.vac_45_60;
      this.ageAbove_60 = this.vaccineByAge.above_60;
    });

    this.genderChart = document.getElementById('vaccination_by_gender');
    this.typeChart = document.getElementById('vaccination_by_type');
    this.ageChart = document.getElementById('vaccination_by_age');
    Chart.register(...registerables);
    setTimeout(() => {
      this.vaccinationByGender();
      this.vaccinationByType();
      this.vaccinationByage()
    }, 500);
  }


  onFilterClick(event: any) {
    if (event == null) {
      this.genderData.push(this.vaccineByGender.male);
      this.genderData.push(this.vaccineByGender.female);
      this.genderData.push(this.vaccineByGender.others)

      // By Type

      this.typeData.push(this.vaccineByType.covaxin);
      this.typeData.push(this.vaccineByType.covishield);
      this.typeData.push(this.vaccineByType.sputnik);

      //By Age

      this.age_15_17 = this.vaccineByAge.vac_15_17;
      this.age_18_45 = this.vaccineByAge.vac_18_45;
      this.age_45_60 = this.vaccineByAge.vac_45_60;
      this.ageAbove_60 = this.vaccineByAge.above_60;

    } else {

      setTimeout(() => {
        this.genderData.splice(0, this.genderData.length);
       
        this.genderData.push(this.currentVaccineGender.male);
        this.genderData.push(this.currentVaccineGender.female);
        this.genderData.push(this.currentVaccineGender.others)
        console.log(this.genderData, 'gender data');
        this.typeData.splice(0, this.typeData.length);
  
        this.typeData.push(this.currentVaccineGender.covaxin);
        this.typeData.push(this.currentVaccineGender.covishield);
        this.typeData.push(this.currentVaccineGender.sputnik);
  
        this.age_15_17 = this.currentTotalByAge.vac_15_17;
        this.age_18_45 = this.currentTotalByAge.vac_18_45;
        this.age_45_60 = this.currentTotalByAge.vac_45_60;
        this.ageAbove_60 = this.currentTotalByAge.above_60;      
        this.genderGraph.destroy();
        this.vaccinationByGender();
    
        this.typeGraph.destroy();
        this.vaccinationByType();
    
        this.ageGraph.destroy();
        this.vaccinationByage();
        
      }, 200);
    }
  }

  onFilterClickDistrict(event: any) {
    if (event == null) {
      this.genderData.push(this.vaccineByGender.male);
      this.genderData.push(this.vaccineByGender.female);
      this.genderData.push(this.vaccineByGender.others)
      // By Type

      this.typeData.push(this.vaccineByType.covaxin);
      this.typeData.push(this.vaccineByType.covishield);
      this.typeData.push(this.vaccineByType.sputnik);
      //By Age

      this.age_15_17 = this.vaccineByAge.vac_15_17;
      this.age_18_45 = this.vaccineByAge.vac_18_45;
      this.age_45_60 = this.vaccineByAge.vac_45_60;
      this.ageAbove_60 = this.vaccineByAge.above_60;
      
    } else {
      setTimeout(() => {
        this.genderData.splice(0, this.genderData.length);
       
        this.genderData.push(this.currentDistrictGender.male);
        this.genderData.push(this.currentDistrictGender.female);
        this.genderData.push(this.currentDistrictGender.others)
  
        this.typeData.splice(0, this.typeData.length);
  
        this.typeData.push(this.currentDistrictGender.covaxin);
        this.typeData.push(this.currentDistrictGender.covishield);
        this.typeData.push(this.currentDistrictGender.sputnik);
  
        this.age_15_17 = this.currentDistrictByAge.vac_15_17;
        this.age_18_45 = this.currentDistrictByAge.vac_18_45;
        this.age_45_60 = this.currentDistrictByAge.vac_45_60;
        this.ageAbove_60 = this.currentDistrictByAge.above_60;
        this.genderGraph.destroy();
        this.vaccinationByGender();
    
        this.typeGraph.destroy();
        this.vaccinationByType();
    
        this.ageGraph.destroy();
        this.vaccinationByage();
      }, 200);
      
    }
  }
  
  vaccinationByGender(): void {
    this.genderGraph = new Chart(this.genderChart, {
      type: 'pie',
      data: {
        datasets: [
          {
            label: 'Vaccination By Gender',
            data: this.genderData,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }
        ],
        labels: [
          'Male',
          'Female',
          'Others'
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Vaccination By Gender'
          },
          legend: {
            position: 'right',
            labels: {
              usePointStyle: true,
            },
          }
        }
      }
    })
  }

  vaccinationByType(): void {
    this.typeGraph = new Chart(this.typeChart, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: 'Vaccination By Type',
            data: this.typeData,
            backgroundColor: [
              'orange',
              'blue',
              'green'
            ],
            hoverOffset: 4
          }
        ],
        labels: [
          'Covishield',
          'Covaxin',
          'Sputnik V'
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Vaccination By Type'
          },
          legend: {
            position: 'right',
            labels: {
              usePointStyle: true,
            },
          }
        }
      }
    })
  }

  vaccinationByage(): void {
    this.ageGraph = new Chart(this.ageChart, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: '15-17',
            data: [this.age_15_17],
            backgroundColor: 'orange',
          },
          {
            label: '18-45',
            data: [this.age_18_45],
            backgroundColor: 'green',
          },
          {
            label: '45-60',
            data: [this.age_45_60],
            backgroundColor: 'blue',
          },
          {
            label: 'Above 60',
            data: [this.ageAbove_60],
            backgroundColor: 'red',
          }
        ],
        labels: [
          ''
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Vaccination By Age'
          },
          legend: {
            labels: {
              usePointStyle: true,
            },
          }
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
      },
    })
  }
}
