# Pagination-filtaring npm module usage

### Installation
```
npm i pagination-filters
```
### Usage in code

add PaginationFiltersModule in the imports section of project module
```
@NgModule({
  declarations: [AppComponent],
  imports: [
    PaginationFiltersModule
  ...
```    
in component.html file add code:
```
<ng-template #template let-item='item'>
  <component-from-the-project [currentItem]="item.current"></component-from-the-project>
</ng-template>

<NXworkspace-pagination-filters
  *ngIf="itemsArrAll"
  [template]='template'
  [amountPerPage]=6
  [pagFilterItems]="blogArrAll"
  [filterName]="'filtername'">
</NXworkspace-pagination-filters>
```
where \<component-from-the-project\>\</component-from-the-project\> is a dump component from the project itself, which will be used in PaginationFiltersModule inside *ngFor to display paginated items.
 [currentItem] - input in component-from-the-project component with current paginated filtered item.
 itemsArrAll - array of object items for pagination and filtering, like this:
 ```
     itemsArrAll = [
       {
         id: 1,
         tags: ['design', 'photography']
       }
     ...
     ]
 ```
 [amountPerPage] - amount of items per page.
 [filterName] - name of key of object itemsArrAll for filtering, f.e."'tags'"
