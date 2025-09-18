import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BooksComponent } from './views/books/books.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { AuthorsComponent } from './views/authors/authors.component';
import { ContactComponent } from './views/contact/contact.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'libros', component: BooksComponent },
  { path: 'detalles/:id',
     component: DetallesComponent },
  { path: 'autores', component: AuthorsComponent },
  { path: 'acerca', component: ContactComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'sobre-kima', component: AboutComponent },
  { path: '**', redirectTo: '' } // ruta por defecto
];
