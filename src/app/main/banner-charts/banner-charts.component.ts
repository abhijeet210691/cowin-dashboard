import { Component, OnInit } from '@angular/core';
import { CowinChartService } from '../cowin-chart.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-banner-charts',
  templateUrl: './banner-charts.component.html',
  styleUrls: ['./banner-charts.component.scss']
})
export class BannerChartsComponent implements OnInit {

   registerTodayList: any

  constructor(private cowinData: CowinChartService) { }

  ngOnInit(): void {
    this.cowinData.registerToday().subscribe((res: any) => {
      this.registerTodayList = res;
      console.log(res);
    })

  }

}
