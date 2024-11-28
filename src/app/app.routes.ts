import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';

const routes: Routes = [
  { path: '', component: ImageListComponent },
  { path: 'image/:id', component: ImageDetailComponent },
  { path: '**', redirectTo: '' }  // Ruta comodín para manejar 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
