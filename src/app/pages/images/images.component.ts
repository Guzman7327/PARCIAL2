import { Component } from '@angular/core';
import { PicsumService } from '../../services/picsum.service';

@Component({
  selector: 'app-images',
  imports: [],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent {

  constructor(
    private service: PicsumService
  ) { }

}
