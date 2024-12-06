import { Component, Output } from '@angular/core';
import { DiseaseFetcherService } from '../disease-fetcher.service';
import { BehaviorSubject, Observable, min } from 'rxjs';
import { LoadingComponent } from '../loading/loading.component';
import { CommonModule } from '@angular/common';
import { ResultchartComponent } from '../resultchart/resultchart.component';


@Component({
  selector: 'app-disease-predictor',
  standalone: true,
  imports: [LoadingComponent,CommonModule,ResultchartComponent],
  templateUrl: './disease-predictor.component.html',
  styleUrl: './disease-predictor.component.css'
})
export class DiseasePredictorComponent  {
  private defaultimage :string = '..\\..\\assets\\empty.png';
  isLoading : boolean = false;
  isResultavailable: boolean = false;
  imageURL : string = this.defaultimage;
  result : any;
  finalDiseasePrediction: string = '';
  

 // imageURL : string = '..\\..\\..\\..\\..\\Machine Learning Module\\ip.jpg';
  
  dataObserver$ : BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private diseaserService : DiseaseFetcherService){}

  myFun(){
    if(this.imageURL!=this.defaultimage){
      this.isLoading=true;
      this.diseaserService.fetchData().subscribe((data) =>{
        console.log(typeof(data));
        this.findFinalDisease(data)
        this.result = data;
        this.dataObserver$.next(data);
        this.isLoading = false;
        this.isResultavailable = true;
      })

    }
  }

  imageHandler(event: any){

    this.isLoading = false;
    this.isResultavailable = false;
    console.log(event);
    const Formdata = new FormData();
    const file = event.target.files[0];
    Formdata.append('image',file,file.name);
    console.log(file)
    console.log(Formdata);

    const reader = new FileReader();

    reader.onload = (event: any) => {
      this.imageURL = event.target.result;
    };

    reader.readAsDataURL(file);

    this.diseaserService.saveImage(Formdata).subscribe((res) =>{
      console.log(res);
    
    })



  }
  handleDelete(){
    this.imageURL = this.defaultimage;
    //this.data$ = undefined;
    this.result = null;
    this.isLoading = false;
    this.isResultavailable = false;
  }
  findFinalDisease(data:string)
  {
    let dataJson = JSON.parse(data);
    //console.log(dataJson);
    let minprediction = 0;
    let diseaseMax = '';
    for( let disease in dataJson){

      let disprediction = dataJson[disease]
      if(disprediction>minprediction)
      {
        diseaseMax = disease;
        minprediction = disprediction;
      }

    }

    this.finalDiseasePrediction = diseaseMax;
    console.log(this.finalDiseasePrediction);


  }
}
