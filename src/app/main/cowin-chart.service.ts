import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CowinChartService {
  

  constructor(private http: HttpClient) { }

  registerToday(){
    const baseUrl = "https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports";
    return this.http.get(baseUrl);
  }

  getDistrictsByState(stateID:any){
    const districtUrl = "https://cdn-api.co-vin.in/api/v2/admin/location/districts/" + stateID;
    return this.http.get(districtUrl);
  }

  getStateData(stateID:any){
    const stateUrl = "https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id="+stateID;
    return this.http.get(stateUrl);
  }

  getDistrictDataByTodaysDate(stateID:any, districtID:any, todaysDate: any){
    const districtTodaysUrl = "https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id="+stateID+ "&district_id="+districtID+"&date="+todaysDate;
    return this.http.get(districtTodaysUrl);
  }
  
  private _listners = new Subject<any>()
    listen(): Observable<any> {
       return this._listners.asObservable();
    }

    filter(filterBy: string) {
       this._listners.next(filterBy);
    }


    private _listnersDistrict = new Subject<any>()
    listenDistrict(): Observable<any> {
      return this._listnersDistrict.asObservable();
   }

    filterDistrict(filterDistrictBy: string) {
      this._listnersDistrict.next(filterDistrictBy);
   }

}
