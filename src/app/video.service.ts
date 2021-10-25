import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  public _getUrl = '/api/videos';

  constructor( private _http: HttpClient) { }

  getVideos()
  {
    return this._http.get(this._getUrl)
    .pipe(map((res:any) => res.json()));
  }

}

// function videos(videos: any): any {
  // throw new Error('Function not implemented.');
// }
  // function tap(arg0: (data: any) => void): import("rxjs").OperatorFunction<unknown, unknown> {
  //   throw new Error('Function not implemented.');
  // }

