// esata seccion es la biblioteca de mi proyecto
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//agregamos la libreria a usar en tab1
import { AngularFireDatabase } from '@angular/fire/database';
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
    AngularFireDatabase // agregamos la libreria importada
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
