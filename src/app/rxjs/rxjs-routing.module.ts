import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MisterRedComponent } from './components/mister-red/mister-red.component';
import { MissRainbowComponent } from './components/miss-rainbow/miss-rainbow.component';
import { MisterJackComponent } from './components/mister-jack/mister-jack.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: '/rxjs/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'ex1',
    component: MisterRedComponent,
  },
  {
    path: 'ex2',
    component: MissRainbowComponent,
  },
  {
    path: 'ex3',
    component: MisterJackComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule {}
