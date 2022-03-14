import { Component, OnInit } from '@angular/core';
import { CowinChartService } from '../cowin-chart.service';


@Component({
  selector: 'app-state-vaccination',
  templateUrl: './state-vaccination.component.html',
  styleUrls: ['./state-vaccination.component.scss']
})
export class StateVaccinationComponent implements OnInit {
  registerTodayList: any;
  registerTotal: any = [];
  totalCount: any;
  chart: any;
  doseData: any = [];
  data1: any;
  chartDose: any;
  stateName: any;
  selectedState: any;
  stateTitle: any;
  stateDose1: any;
  stateDose2: any;
  statePDose: any;
  rect: any;
  positionX: any;
  positionY: any;
  stateWiseData: any;
  bubbleElements: any;
  widthElement: any;
  rootSvg: any;
  pointSvg: any;
  circles: any;
  matrix: any;
  coordinate: any;
  radius: any;



  constructor(private cowinData: CowinChartService) { }

  ngOnInit(): void {
    this.cowinData.registerToday().subscribe((res: any) => {
      this.registerTodayList = res.getBeneficiariesGroupBy;
      this.totalCount = res.topBlock.vaccination.total;
      this.registerTodayList.forEach((ele:any) => {
        this.radius = (ele.total/this.totalCount);
        this.registerTotal.push(this.radius);
      });
    });

    this.stateName = document.querySelectorAll('.land');
    this.stateWiseData = document.getElementById('stateDate');
    this.bubbleElements = document.getElementById('bubble');

    this.stateName.forEach((state: any, i: any) => {
      this.selectedState = state.getAttribute('id');
      this.circles = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      this.circles.setAttribute("id", this.selectedState);
      // console.log(this.circles.getAttribute('id'));
      if (state.getAttribute('id') == this.circles.getAttribute('id')) {
        this.circles.setAttribute("cx", state.getBBox().x + (state.getBoundingClientRect().width/2));
        this.circles.setAttribute("cy", state.getBBox().y + (state.getBoundingClientRect().height/2));
      }
      this.circles.setAttribute("r", 5);
      this.circles.setAttribute("stroke-width", 1);
      this.circles.setAttribute("stroke-opacity", 0.5);
      this.circles.style.fill = 'red';
      this.bubbleElements.appendChild(this.circles);

      state.addEventListener("mouseover", (e: any) => {
        this.selectedState = state.getAttribute('id');
        this.getSelectedState(this.selectedState);
        this.stateWiseData.style.left = e.offsetX + (state.getBoundingClientRect().width/2)+ 'px';
        this.stateWiseData.style.top = e.offsetY + 'px';
        this.stateWiseData.style.display = 'inline-block';
      });
      // state.addEventListener('click', () => {
      //   this.stateWiseData.style.display = 'none';
      // })
    });
  }
  getSelectedState(selectedState: any): void {
    this.registerTodayList.forEach((ele: any) => {
      if (ele.id == selectedState) {
        this.stateTitle = ele.title;
        this.stateDose1 = ele.partial_vaccinated;
        this.stateDose2 = ele.totally_vaccinated;
        this.statePDose = ele.precaution_dose;
      } else {
        console.log('no match');
      }
    });
  }




  // state.addEventListener('mouseout', ()=>{
  //   this.stateWiseData.style.display = 'none';
  // })
  

}
