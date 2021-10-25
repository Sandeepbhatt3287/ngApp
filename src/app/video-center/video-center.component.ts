import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl:'./video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  videos: any;

  selectedVideo!: Video;

  constructor( public _videoService: VideoService) { }
 
  ngOnInit(): void {
    this._videoService.getVideos()
    .subscribe(resVideoData => this.videos = resVideoData);

  }
   
  onSelectVideo(video:any)
  {
    this.selectedVideo= video;
    console.log(this.selectedVideo);
  }
}
