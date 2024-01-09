import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err: Error) => console.error(err));