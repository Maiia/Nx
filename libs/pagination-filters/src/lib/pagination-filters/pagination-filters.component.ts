import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {trigger, animate, style, transition, keyframes} from '@angular/animations';


@Component({
  selector: 'NXworkspace-pagination-filters',
  templateUrl: './pagination-filters.component.html',
  styleUrls: ['./pagination-filters.component.css'],
  animations: [
    trigger('moveUp', [
    transition('true <=> false', animate('.4s ease-in', keyframes([
      style({transform: 'translateY(30px)', offset: 0}),
      style({transform: 'translateY(-10px)',  offset: 0.4}),
      style({transform: 'translateY(0px)', offset: 1})
      ])))
    ])
  ]
})

export class PaginationFiltersComponent implements OnInit {
  @Input() pagFilterItems: Array<Object>;
  @Input() filterName: string;
  @Input() amountPerPage: number;

  @Input() template : TemplateRef<any>;
  @ViewChild('viewcontainer', {read: ViewContainerRef})
        viewcontainer : ViewContainerRef;

  itemsTagged: Array<Object>;
  itemsPaginated: Array<Object>;
  tags: any;
  tagsArr: Array<String>;

  animationState = true;

  constructor(
    private cdRef: ChangeDetectorRef
  ) {
    this.tagsArr = [];
  }

  ngOnInit() {
    this.itemsTagged = [{}];

    this.pagFilterItems.forEach((item) => {
      this.createEl(item);
    });

    Object.assign(this.itemsTagged, this.pagFilterItems);

    const tagsSet = new Set;
    this.pagFilterItems.forEach(item =>
      item['tags'].forEach(itemInside =>
        tagsSet.add(itemInside)
    ));

    this.tags = Array.from(tagsSet);
  }

  createEl(item) {
    this.viewcontainer.createEmbeddedView(this.template, {item: {current: item}});
  }

  removeEl(item, index?) {
    this.viewcontainer.remove(index);
  }

  getBlogArrPaginated(arr) {
    this.pagFilterItems.forEach((item, index) => {
      this.removeEl(index);
    });
    this.itemsPaginated = arr;

    this.itemsPaginated.forEach((item) => {
      this.createEl(item);
    });

    this.cdRef.detectChanges();
  }

  onTagClick(evt) {
    if (this.tagsArr.indexOf(evt.target.innerText) > -1) {
      this.tagsArr.splice(
        Number(this.tagsArr.indexOf(evt.target.innerText)),1);
    } else {
      this.tagsArr.push(evt.target.innerText);
    }

    if(this.tagsArr.length === 0) {
      this.itemsTagged = this.pagFilterItems;
      return;
    }

    const arr = [];
    this.tagsArr.forEach((tag: string) => {
      arr.push(...this.pagFilterItems.filter((item: any) => {
          return item['tags'].indexOf(tag) > -1;
        })
      );
    });

    this.itemsTagged = Array.from(new Set(arr).values());

    this.animationState = !this.animationState;
  }

}
