import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageList } from '../interfaces/image-list.interface';

@Injectable({
  providedIn: 'root'
})
export class PicsumService {

  private apiUrl = 'https://picsum.photos/v2/list';

  constructor(private http: HttpClient) { }

  //getPics(): Observable<any> {
  //  return this.http.get<any>(this.apiUrl);
  //}
  //}
getAllImages(): Observable<ImageList[]> {
  return this.http.get<ImageList[]>('https://picsum.photos/v2/list');
}

}
