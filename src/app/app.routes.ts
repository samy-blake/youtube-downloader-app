import { Routes } from '@angular/router';
import { DowloaderComponent } from './dowloader/dowloader.component';
import { OptionsComponent } from './options/options.component';

export const routes: Routes = [
  {
    path: '',
    component: DowloaderComponent
  },
  {
    path: 'options',
    component: OptionsComponent
  }
];
