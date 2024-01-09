import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { MisterRedComponent } from './components/mister-red/mister-red.component';
import { MissRainbowComponent } from './components/miss-rainbow/miss-rainbow.component';
import { MisterJackComponent } from './components/mister-jack/mister-jack.component';

@NgModule({
  imports: [CommonModule, RxjsRoutingModule],
  declarations: [
    HomeComponent,
    MisterRedComponent,
    MissRainbowComponent,
    MisterJackComponent,
  ],
})
export class RxjsModule {}
