import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LessonsComponent } from './lessons/lessons.component';

export const schoolUiRoutes: Route[] = [
  {
    path: '',
    component: LessonsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LessonsComponent]
})
export class SchoolUiModule {}
