import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputComponent } from './components/atoms/input/input.component';
import { PhotoComponent } from './components/atoms/photo/photo.component';
import { TextComponent } from './components/atoms/text/text.component';
import { ContactSearchComponent } from './components/molecules/contact-search/contact-search.component';
import { LeftOptionComponent } from './components/molecules/left-option/left-option.component';
import { MoleculesModule } from './components/molecules/molecules.module';
import { TopPannelComponent } from './components/organisms/top-pannel/top-pannel.component';
import { PageComponent } from './pages/page/page.component';


const appRoutes: Routes = [
  { path: '', component: PageComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'photo' , component: PhotoComponent },
  { path: 'leftPannel' , component: LeftOptionComponent },
  { path: 'text', component: TextComponent },
  { path: 'topPannel', component: TopPannelComponent},
  { path: 'input', component: InputComponent },
  { path: 'contact', component: ContactSearchComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
