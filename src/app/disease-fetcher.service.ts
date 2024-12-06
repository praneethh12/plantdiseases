import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiseaseFetcherService {
  data : any;
  private apiUrl = 'http://localhost:3000';
  constructor(private httpclient : HttpClient) { }

  fetchData() : Observable<any> {
    //console.log("Coming here")
    return this.httpclient.get(this.apiUrl + '/predictor');
  }
  saveImage(file : FormData){
    console.log(file);
    return this.httpclient.post(this.apiUrl + '/saveImage',file)
  }

  
}
