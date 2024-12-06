import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DiseasePredictorComponent } from './disease-predictor/disease-predictor.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { CuresComponent } from './cures/cures.component';
import { BlackRotComponent } from './diseases/black-rot/black-rot.component';
import { CommonRustComponent } from './diseases/common-rust/common-rust.component';
import { EscaComponent } from './diseases/esca/esca.component';
import { GrayLeafSpotComponent } from './diseases/gray-leaf-spot/gray-leaf-spot.component';
import { HealthyComponent } from './diseases/healthy/healthy.component';
import { LeafBlightComponent } from './diseases/leaf-blight/leaf-blight.component';

export const routes: Routes = [
    { path: 'predictor', component: DiseasePredictorComponent },
    { path: 'diseases', component: DiseasesComponent},
    { path: 'blackrot', component: BlackRotComponent },
    { path: 'commonrust', component: CommonRustComponent },
    { path: 'esca', component: EscaComponent },
    { path: 'grayleaf', component: GrayLeafSpotComponent },
    { path: 'healthy', component: HealthyComponent },
    { path: 'blackrot', component: BlackRotComponent },
    { path: 'leafblight', component: LeafBlightComponent },
    { path: 'cures', component: CuresComponent },
    {path:'about',component: CuresComponent},

    { path: '', redirectTo: '/predictor', pathMatch: "full" },

];
