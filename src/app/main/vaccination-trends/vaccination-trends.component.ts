import { Component, OnInit, Input } from '@angular/core';
import { CowinChartService } from '../cowin-chart.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-vaccination-trends',
  templateUrl: './vaccination-trends.component.html',
  styleUrls: ['./vaccination-trends.component.scss']
})
export class VaccinationTrendsComponent implements OnInit {

  vaccineTotal: any;
  vacCount: any = [];
  vacLabel: any = [];
  doseOne: any = [];
  doseTwo: any = [];
  dosePd: any = [];
  // By Age
  byAgeTotal: any;
  ageTotal: any = [];
  age15_17: any = [];
  age18_45: any = [];
  age45_60: any = [];
  ageAbove_60: any = [];

  chart: any;
  doseChart: any;
  ageChart: any;

  btnDose: any;
  btnAge: any;


  @Input() trends: any;
  @Input() stateVaccineTime: any;
  @Input() currentVaccineAge: any;
  @Input() currentDistrictByTime: any;
  @Input() currentDistrictAge: any;

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
      this.vaccineTotal = res.vaccinationDoneByTime;
      this.vaccineTotal.forEach((ele: any) => {
        this.vacCount.push(ele.count);
        this.vacLabel.push(parseInt(ele.label) + 1);
        this.doseOne.push(ele.dose_one);
        this.doseTwo.push(ele.dose_two);
        this.doseTwo.push(ele.dose_pd);
      });

      //By Age Data
      this.byAgeTotal = res.vaccinationDoneByTimeAgeWise;
      this.byAgeTotal.forEach((ele: any) => {
        this.ageTotal.push(ele.total);
        this.age15_17.push(ele.vac_15_17);
        this.age18_45.push(ele.vac_18_45);
        this.age45_60.push(ele.vac_45_60);
        this.ageAbove_60.push(ele.vac_60_above);
      })
    });

    this.chart = document.getElementById('my_first_chart');
    Chart.register(...registerables);
    setTimeout(() => {
      this.byDoseChart();
      // this.byAgeChart();
    }, 500);
  }

  onFilterClick(event: any) {
    if (event == null) {
      this.vaccineTotal.forEach((ele: any) => {
        this.vacCount.push(ele.count);
        this.vacLabel.push(parseInt(ele.label) + 1);
        this.doseOne.push(ele.dose_one);
        this.doseTwo.push(ele.dose_two);
        this.doseTwo.push(ele.dose_pd);
      });

      this.byAgeTotal.forEach((ele: any) => {
        this.ageTotal.push(ele.total);
        this.age15_17.push(ele.vac_15_17);
        this.age18_45.push(ele.vac_18_45);
        this.age45_60.push(ele.vac_45_60);
        this.ageAbove_60.push(ele.vac_60_above);
      })
    } else {
      setTimeout(() => {
        this.vacCount.splice(0, this.vacCount.length);
        this.vacLabel.splice(0, this.vacLabel.length)
        this.doseOne.splice(0, this.doseOne.length)
        this.doseTwo.splice(0, this.doseTwo.length)

        this.stateVaccineTime.forEach((ele: any) => {
          this.doseChart.destroy();
          this.byDoseChart();
          console.log(ele.count, 'ele')
          this.vacCount.push(ele.count);
          this.vacLabel.push(parseInt(ele.label) + 1);
          this.doseOne.push(ele.dose_one);
          this.doseTwo.push(ele.dose_two);
          this.doseTwo.push(ele.dose_pd);

        });

        this.ageTotal.splice(0, this.ageTotal.length);
        this.age15_17.splice(0, this.age15_17.length);
        this.age18_45.splice(0, this.age18_45.length);
        this.age45_60.splice(0, this.age45_60.length);
        this.ageAbove_60.splice(0, this.ageAbove_60.length);

        this.currentVaccineAge.forEach((ele: any) => {
          this.ageChart.destroy();
          this.byAgeChart();
          this.ageTotal.push(ele.total);
          this.age15_17.push(ele.vac_15_17);
          this.age18_45.push(ele.vac_18_45);
          this.age45_60.push(ele.vac_45_60);
          this.ageAbove_60.push(ele.vac_60_above);

        })
      }, 200);
    }
  }

  onFilterClickDistrict(event: any) {
    if (event == null) {
      this.vaccineTotal.forEach((ele: any) => {
        this.vacCount.push(ele.count);
        this.vacLabel.push(parseInt(ele.label) + 1);
        this.doseOne.push(ele.dose_one);
        this.doseTwo.push(ele.dose_two);
        this.doseTwo.push(ele.dose_pd);
      });

      this.byAgeTotal.forEach((ele: any) => {
        this.ageTotal.push(ele.total);
        this.age15_17.push(ele.vac_15_17);
        this.age18_45.push(ele.vac_18_45);
        this.age45_60.push(ele.vac_45_60);
        this.ageAbove_60.push(ele.vac_60_above);
      })
    } else {

      setTimeout(() => {
        this.vacCount.splice(0, this.vacCount.length);
        this.vacLabel.splice(0, this.vacLabel.length)
        this.doseOne.splice(0, this.doseOne.length)
        this.doseTwo.splice(0, this.doseTwo.length)
        console.log(this.currentDistrictByTime);
        this.currentDistrictByTime.forEach((ele: any) => {
          console.log(ele.count, 'district count')
          this.vacCount.push(ele.count);
          this.vacLabel.push(parseInt(ele.label) + 1);
          this.doseOne.push(ele.dose_one);
          this.doseTwo.push(ele.dose_two);
          this.doseTwo.push(ele.dose_pd);

        });

        this.ageTotal.splice(0, this.ageTotal.length);
        this.age15_17.splice(0, this.age15_17.length);
        this.age18_45.splice(0, this.age18_45.length);
        this.age45_60.splice(0, this.age45_60.length);
        this.ageAbove_60.splice(0, this.ageAbove_60.length);
        this.currentDistrictAge.forEach((ele: any) => {
          this.ageTotal.push(ele.total);
          this.age15_17.push(ele.vac_15_17);
          this.age18_45.push(ele.vac_18_45);
          this.age45_60.push(ele.vac_45_60);
          this.ageAbove_60.push(ele.vac_60_above);

        })
      }, 200);
      this.doseChart.destroy();
      this.byDoseChart();

      this.ageChart.destroy();
      this.byAgeChart();
    }
  }

  byDoseChart(): void {
    console.log(this.vacCount, 'district');
    this.doseChart = new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [
          {
            data: this.vacCount,
            fill: false,
            borderColor: 'red',
            tension: 0.1,
            label: 'Total Doses',
          },
          {
            data: this.doseOne,
            fill: false,
            borderColor: 'orange',
            tension: 0.1,
            label: 'Dose One',
          },
          {
            data: this.doseTwo,
            fill: false,
            borderColor: 'green',
            tension: 0.1,
            label: 'Dose Two',
          },
          {
            data: this.doseTwo,
            fill: false,
            borderColor: 'yellow',
            tension: 0.1,
            label: 'Precaution Dose',
          },
        ],
        labels: this.vacLabel
      },
      options: {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
            },
          }
        }
      }
    })
  };

  byAgeChart(): void {
    this.ageChart = new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [
          {
            data: this.ageTotal,
            fill: false,
            borderColor: 'blue',
            tension: 0.1,
            label: 'Total',
          },
          {
            data: this.age15_17,
            fill: false,
            borderColor: 'orange',
            tension: 0.1,
            label: '15-17',
          },
          {
            data: this.age18_45,
            fill: false,
            borderColor: 'green',
            tension: 0.1,
            label: '18-45',
          },
          {
            data: this.age45_60,
            fill: false,
            borderColor: 'yellow',
            tension: 0.1,
            label: '45-60',
          },
          {
            data: this.ageAbove_60,
            fill: false,
            borderColor: 'brown',
            tension: 0.1,
            label: 'Above 60',
          },
        ],
        labels: this.vacLabel
      },
      options: {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
            },
          }
        }
      }
    })
  }

  toggleChart(selectedChart: string) {
    this.btnDose = document.querySelector('.btn-dose');
    this.btnAge = document.querySelector('.btn-age');
    if (selectedChart == 'age') {
      this.doseChart.destroy()
      this.byAgeChart();
      this.btnAge.classList.add("active");
      this.btnDose.classList.remove("active");
    } else {
      this.ageChart.destroy();
      this.byDoseChart();
      this.btnAge.classList.remove("active");
      this.btnDose.classList.add("active");
    }
  }

}

