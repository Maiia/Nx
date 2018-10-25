import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'NXworkspace-pagination-tags',
  templateUrl: './pagination-tags.component.html',
  styleUrls: ['./pagination-tags.component.css']
})
export class PaginationTagsComponent implements OnInit {
  @Input() pagTagsItems: Array<Object>;
  itemsTagged: Array<Object>;
  itemsPaginated: Array<Object>;
  tags: any;
  tagsArr: Array<String>;

  constructor(private cdRef: ChangeDetectorRef) {
    this.tagsArr = [];
  }

  ngOnInit() {
    this.itemsTagged = [{}];
    //     Object.assign(this.itemsTagged, this.pagTagsItems);
    //
    //     this.authorsService.getAuthors().subscribe(
    //       authors => {
    //         this.authorsArr = authors['authors'];
    //       },
    //       err => console.error('err1', err)
    //     );
    //   },
    //   error => console.log('error', error)
    // );
    //
    // this.blogService.getTags().subscribe(data => {
    //   this.tags = data;
    // });
  }

  getBlogArrPaginated(arr) {
    this.itemsPaginated = arr;
    this.cdRef.detectChanges();
  }

  onTagClick(evt) {
    if (this.tagsArr.indexOf(evt.target.innerText) > -1) {
      this.tagsArr.splice(
        Number(this.tagsArr.indexOf(evt.target.innerText)),
        1
      );
    } else {
      this.tagsArr.push(evt.target.innerText);
    }

    const arr = [];
    this.tagsArr.forEach((tag: string) => {
      // arr.push(...this.pagTagsItems.filter((item: IBlog) => {
      //     return item['tags'].indexOf(tag) > -1;
      //   })
      // );
    });

    this.itemsTagged = Array.from(new Set(arr).values());
  }
}
