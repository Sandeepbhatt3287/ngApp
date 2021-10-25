import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs:['video']
})
export class VideoDetailComponent implements OnInit {
   
   public video: any;

  constructor() { }

  ngOnInit(): void {
  }

}
