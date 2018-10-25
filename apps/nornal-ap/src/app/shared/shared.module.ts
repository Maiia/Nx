import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BlogItemComponent } from './blog-item/blog-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [BlogItemComponent],
  exports: [BlogItemComponent]
})
export class SharedModule { }
