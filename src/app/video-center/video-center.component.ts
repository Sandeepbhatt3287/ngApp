import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-center',
  templateUrl:'./video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {
  videos: Video[]=[

    {"_id":"1","title":"title 1","url":"url 1","description":"desc 1"},
    {"_id":"1","title":"title 2","url":"url 1","description":"desc 1"},
    {"_id":"1","title":"title 3","url":"url 1","description":"desc 1"}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
