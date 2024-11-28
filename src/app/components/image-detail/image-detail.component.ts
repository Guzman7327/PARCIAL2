import { Component, OnInit, Input } from '@angular/core';
import { PicsumService } from './services/picsum.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageListComponent } from './components/image-list/image-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ ImageDetailComponent],
  imports: [CommonModule, RouterModule],
  providers: [PicsumService],  // Asegúrate de agregar PicsumService a los providers
})
// export class AppModule { }

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent  {
  @Input() imageUrl: string="";
  @Input() imageDescription: string="";

  constructor() { }


}
