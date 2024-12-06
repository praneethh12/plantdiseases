import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DiseaseFetcherService } from '../disease-fetcher.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet,
            RouterLink,
            RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent{
  title = "GreenGuardian"

  

}
