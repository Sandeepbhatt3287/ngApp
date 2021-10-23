import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  videos: Video[]=[

          {"_id":"1","title":"Title 1","url":"url 1","description":"desc 1"},
          {"_id":"2","title":"Title 2","url":"url 2","description":"desc 2"},
          {"_id":"3","title":"Title 3","url":"url 3","description":"desc 3"},
          {"_id":"4","title":"Title 4","url":"url 4","description":"desc 4"}




  ];

  constructor() { }

  ngOnInit(): void {
  }

}
