import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model'
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredContent = '';
  enteredTitle = '';

  constructor(public postService: PostService) { }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm){
    if(form.invalid){
      return
    }
const post: Post = {
  id: form.value.id,
  title: form.value.title,
  content: form.value.content
};
this.postService.addPost(form.value.title, form.value.content)
form.resetForm();
  }

}
