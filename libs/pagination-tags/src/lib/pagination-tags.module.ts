import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './pagination/pagination.component';
import { TagsComponent } from './tags/tags.component';
import { PaginationTagsComponent } from './pagination-tags/pagination-tags.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PaginationComponent, TagsComponent, PaginationTagsComponent],
  exports: [PaginationComponent, TagsComponent, PaginationTagsComponent]
})
export class PaginationTagsModule {}
