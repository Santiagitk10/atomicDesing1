import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { PhotoComponent } from './components/atoms/photo/photo.component';
import { LeftOptionComponent } from './components/molecules/left-option/left-option.component';
import { PageComponent } from './pages/page/page.component';

const appRoutes: Routes = [
  { path: '', component: PageComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'photo' , component: PhotoComponent },
  { path: 'leftPannel' , component: LeftOptionComponent }


];



@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
