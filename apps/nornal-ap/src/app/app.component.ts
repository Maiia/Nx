import { Component, Input } from '@angular/core';

@Component({
  selector: 'NXworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nornal-ap';

  //for lib pagination-tags

  blog = [
    {
      id: 1,
      visited: 142,
      tags: ['design', 'photography'],
      title: 'Just a Standard Format Post',
      author_id: 1,
      date: 'Fri September 15 2018 00:00:00 GMT+0200',
      blog_img_small: 'assets/thumbs/masonry/lamp-400.jpg',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
        'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
        'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
        'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
        'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
        'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
    },
    {
      id: 2,
      visited: 42,
      tags: ['family', 'photography'],
      title: 'Key Benefits Of Family Photography',
      author_id: 2,
      date: 'Fri September 10 2018 00:00:00 GMT+0200',
      blog_img_small: 'assets/thumbs/masonry/tulips-400.jpg',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
        'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
        'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
        'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
        'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
        'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
    },
    {
      id: 3,
      visited: 1142,
      tags: ['family', 'relationship'],
      title: 'Create Meaningful Family Moments',
      author_id: 3,
      date: 'Fri August 10 2018 00:00:00 GMT+0200',
      blog_img_small: 'assets/thumbs/masonry/cookies-400.jpg',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
        'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
        'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
        'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
        'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
        'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
    },
    {
      id: 4,
      visited: 12,
      tags: ['travel', 'vacation'],
      title: 'Planning Your First Trip to Sydney',
      author_id: 1,
      date: 'Fri August 10 2018 00:00:00 GMT+0200',
      blog_img_small: 'assets/thumbs/masonry/wheel-400.jpg',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
        'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
        'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
        'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
        'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
        'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
    },
    {
      id: 5,
      visited: 1424,
      tags: ['cooking', 'health'],
      title: 'No Sugar Oatmeal Cookies',
      author_id: 2,
      date: 'Fri July 10 2018 00:00:00 GMT+0200',
      blog_img_small: 'assets/thumbs/masonry/shutterbug-400.jpg',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
        'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
        'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
        'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
        'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
        'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
    },
    {
      id: 6,
      visited: 1242,
      tags: ['work', 'management'],
      title: 'Workspace Design Trends and Ideas',
      author_id: 3,
      date: 'Fri June 10 2018 00:00:00 GMT+0200',
      blog_img_small: 'assets/thumbs/masonry/gallery/gallery-1-400.jpg',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
        'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
        'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
        'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
        'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
        'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
    },
    {
      id: 7,
      visited: 1429,
      tags: ['lifestyle'],
      title: 'Throwback To The Good Old Days',
      author_id: 1,
      date: 'Fri June 10 2018 00:00:00 GMT+0200',
      blog_img_small: 'assets/thumbs/masonry/guitarman-400.jpg',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
        'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
        'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
        'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
        'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
        'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
    },
    {
      id: 8,
      visited: 2142,
      tags: ['health'],
      title: '10 Interesting Facts About Caffeine',
      author_id: 2,
      date: 'Fri May 8 2018 00:00:00 GMT+0200',
      blog_img_small: 'assets/thumbs/masonry/jump-400.jpg',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
        'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
        'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
        'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
        'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
        'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
    },
    {
      id: 9,
      visited: 143,
      tags: ['health', 'lifestyle'],
      title: 'Visiting Theme Parks Improves Your Health',
      author_id: 3,
      date: 'Fri May 4 2018 00:00:00 GMT+0200',
      blog_img_small: 'assets/thumbs/masonry/fuji-400.jpg',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
        'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
        'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
        'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
        'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
        'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
    },
    {
      id: 10,
      visited: 542,
      tags: ['music', 'lifestyle'],
      title: 'What Your Music Preference Says About You and Your Personality',
      author_id: 1,
      date: 'Fri April 29 2018 00:00:00 GMT+0200',
      blog_img_small: 'assets/thumbs/masonry/sydney-400.jpg',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
        'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
        'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
        'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
        'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
        'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
    },
    {
      id: 11,
      visited: 742,
      tags: ['health'],
      title: '100 Facts About Tea',
      author_id: 2,
      date: 'Fri March 23 2018 00:00:00 GMT+0200',
      blog_img_small: 'assets/thumbs/masonry/beetle-400.jpg',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
        'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
        'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
        'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
        'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
        'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
    },
    {
      id: 12,
      visited: 1642,
      tags: ['health', 'lifestyle'],
      title: 'About clean water',
      author_id: 3,
      date: 'Fri February 19 2018 00:00:00 GMT+0200',
      blog_img_small: 'assets/thumbs/masonry/lamp-400.jpg',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
        'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
        'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
        'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
        'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
        'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
    },
    {
      id: 13,
      visited: 1222,
      tags: ['music', 'lifestyle'],
      title: 'Who Likes Jazz?',
      author_id: 1,
      date: 'Fri January 14 2018 00:00:00 GMT+0200',
      blog_img_small: 'assets/thumbs/masonry/tulips-400.jpg',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
        'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
        'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
        'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
        'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
        'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
    },
    {
      id: 14,
      visited: 1421,
      tags: ['work', 'management'],
      title: 'Scrum Software for Agile Teams',
      author_id: 2,
      date: 'Fri December 11 2017 00:00:00 GMT+0200',
      blog_img_small: 'assets/thumbs/masonry/cookies-400.jpg',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dolore quidem sit veniam. Animi aspernatur ' +
        'cum iste neque quis recusandae temporibus. Ad adipisci aliquam animi aperiam assumenda autem commodi consequuntur cumque ' +
        'dolorem error fuga inventore laudantium maxime modi mollitia natus nobis pariatur perspiciatis quae quas quasi, quia, quidem ' +
        'quis repudiandae sint vel veniam? Ab adipisci aperiam beatae commodi cum cumque debitis deleniti, dignissimos dolores dolorum ' +
        'ducimus eveniet illo illum impedit inventore, ipsam maiores minima nam natus necessitatibus neque nesciunt non numquam odio ' +
        'omnis placeat quaerat quia quis reiciendis rem, saepe sit suscipit ullam unde ut vitae voluptates? Quia, vero!'
    }
  ];

  constructor() {
    console.log('blog', this.blog);
  }
}
