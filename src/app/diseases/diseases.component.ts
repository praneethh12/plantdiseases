import { Component,OnInit,OnDestroy } from '@angular/core';
import { CardViewComponent } from '../card-view/card-view.component';
import { interval,Observable, Subscription } from 'rxjs';

import { RouterLink,RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-diseases',
  standalone: true,
  imports: [CardViewComponent,RouterLink,RouterLinkActive],
  templateUrl: './diseases.component.html',
  styleUrl: './diseases.component.css'
})
export class DiseasesComponent implements OnInit, OnDestroy{
 
  factsSubscription : Subscription= new Subscription();
  prevValue : number = -1;
  selectedFact : string = '';
  facts : Array<string> = [
    "Plants can communicate with each other through chemical signals. When a plant is attacked by pests, it can release chemicals to warn nearby plants, prompting them to produce defensive compounds.",
    "Certain plants have the ability to repel pests or attract beneficial insects. Companion planting is a gardening strategy that takes advantage of these interactions to promote plant health.",
    "Some plants release chemicals into the soil that inhibit the growth of nearby competing plants, a phenomenon known as allelopathy.",
    "Plants exhibit resilience in the face of stress. For example, the ability of some desert plants to go dormant during dry periods and then revive when water becomes available again."
  ]

  ngOnInit(): void {
    
    
    //console.log("OnInit")
    this.generateFact()
    this.factsSubscription= interval(10000).subscribe(()=>{
      
     this.generateFact()

    });
    
    
      
  }

  ngOnDestroy(): void {

    this.factsSubscription.unsubscribe()
  }

  generateFact = ()=>{

    const randomDecimal = Math.random();
    let scaledRandom = Math.floor(randomDecimal * (3+ 1));

    if(this.prevValue!=-1&&this.prevValue==scaledRandom) {
      scaledRandom = (scaledRandom + 1)%4;
    }
    this.prevValue = scaledRandom;
    //console.log(scaledRandom)
    this.selectedFact = this.facts[scaledRandom]
  }


}

