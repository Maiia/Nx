import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationFiltersComponent } from './pagination-filters/pagination-filters.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PaginationFiltersComponent, PaginationComponent],
  exports: [PaginationFiltersComponent, PaginationComponent]
})
export class PaginationFiltersModule {}
