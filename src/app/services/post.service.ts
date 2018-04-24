import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Post } from "../models/Post";
import { Observable } from "rxjs/Observable"

@Injectable()
export class PostService {
  postsUrl: string = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }
}
