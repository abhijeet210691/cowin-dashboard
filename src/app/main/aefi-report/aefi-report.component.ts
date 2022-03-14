import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CowinChartService } from '../cowin-chart.service';

@Component({
  selector: 'app-aefi-report',
  templateUrl: './aefi-report.component.html',
  styleUrls: ['./aefi-report.component.scss']
})
export class AefiReportComponent implements OnInit {

  aefiReport: any;
  aefiData: any = [];
  vac_date: any = [];
  chart: any;

  constructor(private cowinData: CowinChartService) { }

  ngOnInit(): void {

    this.cowinData.registerToday().subscribe((res: any) => {
      this.aefiReport = res.last30DaysAefi;
      this.aefiReport.forEach((ele: any) => {
        this.aefiData.push(ele.aefi);
        this.vac_date.push(ele.vaccine_date);
      });
    });

    this.chart = document.getElementById('aifeChart');
    Chart.register(...registerables);
    setTimeout(() => {
      this.aifeChart();
    }, 500);
  }

  aifeChart(): void {
    new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [
          {
            data: this.aefiData,
            fill: false,
            borderColor: 'red',
            tension: 0.1,
            label: 'Total Doses',
          }
        ],
        labels: this.vac_date
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

}
