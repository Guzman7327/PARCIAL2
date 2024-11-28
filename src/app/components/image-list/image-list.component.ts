import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageListComponent } from './components/image-list/image-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ImageListComponent],
  imports: [
    CommonModule,  // Asegúrate de importar CommonModule
    RouterModule
  ]
})
export class AppModule { }

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    // Example images, replace with your own logic to fetch images
    this.images = [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
      'https://example.com/image3.jpg'
    ];
  }

}
