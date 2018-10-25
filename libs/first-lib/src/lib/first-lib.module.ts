import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLibSComponent } from './first-lib-s/first-lib-s.component';
import { RouterModule, Route } from '@angular/router';

export const FirstLibRoutes: Route[] = [
  { path: '', component: FirstLibSComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FirstLibSComponent]
})
export class FirstLibModule {}
