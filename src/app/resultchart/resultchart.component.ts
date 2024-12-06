import { Component,Input,OnInit } from "@angular/core";

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';




@Component({
  selector: 'app-resultchart',
  standalone: true,
 
  imports: [CanvasJSAngularChartsModule],
  templateUrl: './resultchart.component.html',
  styleUrl: './resultchart.component.css'
})
export class ResultchartComponent implements OnInit {

  @Input() diseaseSubject : any;
  diseaseData : Array<number> = new Array<number>();
  
  chart: any;
  chartOptions: any;
  ngOnInit(){
    this.diseaseSubject.subscribe((data:any)=>{
      data = JSON.parse(data)
      //console.log(typeof(data))

      this.diseaseData[0] = data['Black Rot'] ;
      this.diseaseData[1] = data['Common Rust'] ;
      this.diseaseData[2] = data['ESCA'] ;
      this.diseaseData[3] = data['Gray Leaf Spot'] ;
      this.diseaseData[4] = data['Healthy'] ;
      this.diseaseData[5] = data['Leaf Blight'] ;

      console.log(this.diseaseData);
      //console.log(this.diseaseData[0]);
      this.chartOptions = {
        title:{
          text: "Diseases Predicted : "
        },
        animationEnabled: true,
        axisX: {
         gridColor :" transparent"
        },
        
        axisY: {
          gridThickness: 0,
          includeZero: true,
          suffix: "%"
        },
        data: [{
          type: "bar",
          indexLabel: "{y}",
          yValueFormatString: "",
          // dataPoints: [
          //   { label: "Black Rot", y: this.diseaseData[0], color: "#aad576" },
          //   { label: "Common Rost", y: this.diseaseData[1], color: "#73a942" },
          //   { label: "ESCA", y: this.diseaseData[2], color: "#538d22" },
          //   { label: "Gray Leaf Spot", y: this.diseaseData[3], color: "#245501" },
          //   { label: "Healthy", y: this.diseaseData[4], color: "#1a4301" },
          //   { label: "Leaf Blight", y: this.diseaseData[5], color: "#143601" }
          // ]
          dataPoints: [
            { label: "Black Rot", y: this.diseaseData[0], color: "#073b4c" },
            { label: "Common Rust", y: this.diseaseData[1], color: "#118ab2" },
            { label: "ESCA", y: this.diseaseData[2], color: "#06d6a0" },
            { label: "Gray Leaf Spot", y: this.diseaseData[3], color: "#ffd166" },
            { label: "Healthy", y: this.diseaseData[4], color: "#f78c6b" },
            { label: "Leaf Blight", y: this.diseaseData[5], color: "#ef476f" }
          ]
          
          
          
        }]
      }		
      

    })
  }



  
  

	

}

