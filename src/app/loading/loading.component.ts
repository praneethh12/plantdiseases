import { Component,ViewEncapsulation,OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LoadingComponent implements OnInit {
  
  currentStage : string = ''
  stages : Array<string> = [
    "Analyzing Image",
    "Data Augmentation",
    "Predicting Disease"
  ];
  
  stageIndex: number = 0;
  intervalSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    if (this.stages.length > 0) {
      this.currentStage = this.stages[0];
      
      // Update currentStage after every 3 seconds (3000 milliseconds)
      this.intervalSubscription = interval(7000).subscribe(() => {
        if (this.stageIndex < this.stages.length - 1) {
          this.stageIndex++;
          this.currentStage = this.stages[this.stageIndex];
        } else {
          // All stages displayed, unsubscribe from the interval
          this.intervalSubscription.unsubscribe();
        }
      });
    }
  }

  ngOnDestroy(): void {
    // Unsubscribe from the interval to prevent memory leaks
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }



}
