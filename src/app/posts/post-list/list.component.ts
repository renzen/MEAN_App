import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model'
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
posts: Post[] =[];
  private postSub: Subscription = new Subscription;
  panelOpenState = false;
  constructor(public postService: PostService,
    ) {}

  ngOnInit(): void {
  this.postService.getPost();
   this.postSub =  this.postService.getPostUpdatedListener().subscribe((posts: Post[]) => {
        this.posts = posts;
     });
  }


  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

// posts = [
//   {title: 'firts post', content: 'this is the first post content'},
//   {title: 'second post', content: 'this is the second post content'},
//   {title: 'third post', content: 'this is the third post content'},
//   {title: 'fourth post', content: 'this is the fourth post content'},
// ]

}
