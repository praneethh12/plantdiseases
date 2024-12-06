import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DiseasePredictorComponent } from './disease-predictor/disease-predictor.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavBarComponent,
    RouterLink,
    RouterLinkActive,
    DiseasePredictorComponent,
    RouterOutlet,
    HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})

export class AppComponent {
  title = 'PlantDiseaseFrontend';

}
