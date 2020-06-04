import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';
import { AbsoluteSourceSpan } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slides = [
    {

      img: '/assets/img/Car1/1.jpg',
      titulo: '',  
    },
    {
      img:'/assets/img/Car1/2.jpg',
      titulo: '' ,
    },
    {
      img:'/assets/img/Car1/3.jpg',
      titulo: '', 
    },
  ];

  slides1 = [
    {
      img:'/assets/img/Car2/1.jpg',
      titulo: '',

    },
    {
      img:'/assets/img/Car2/2.jpg',
      titulo: ''
    },
    {
      img:'/assets/img/Car2/3.jpg',
      titulo: ''
    },
  ];
  vertical={
    direction:"vertical",
  };

  horizontal={
    direction:"horizontal",
    loop:true,
  };
  constructor() {}

}
