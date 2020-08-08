import { Component,Input } from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  article:Article[]
  constructor(){
    this.article = [new Article('laksan','laksan@gmail.com',3),new Article('Lasiya','Lasiya@gmail.com',8),new Article('Youkan','Youkan@gmail.com',6)]
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.article.push(new Article(title.value,link.value))
    title.value=''
    link.value=''
    return false
    }}
