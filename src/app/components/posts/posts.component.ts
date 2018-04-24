import { Component, OnInit } from '@angular/core';
import { Post } from "../../models/Post";
import {PostService} from "../../services/post.service"

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  currentPost: Post = {
    id:0,
    title:'',
    body:'' 
  };
  isEdit: Boolean = false;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts; 
      // console.log(this.posts);
    })
  }

  onNewPost(post: Post){
    this.posts.unshift(post);
  }

  editPost(post: Post){
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post){
    this.posts.forEach((curr, index)=>{
      if(post.id === curr.id){
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false; 
        this.currentPost = {
          id:0,
          title: '',
          body: ''
        }       
      }

    })
  }
}
