import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  //  Libros Recomendados
  libros = signal([
  {
    titulo: 'Lo Que El Bosque Esconde ',
    descripcion: 'Un libro mágico lleno de aventuras.',
    imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147879/imagesKYK/libros/mp47go4jeex1y9pfbgkx.jpg'
  },
  {
    titulo: 'Cruce De Caminos',
    descripcion: 'Una novela de misterio',
    imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147878/imagesKYK/libros/gkwxxofdu7zk2fcbgj61.webp'
  },
  {
    titulo: 'Don Quijote de la Mancha',
    descripcion: 'La famosa obra de Miguel de Cervantes.',
    imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147878/imagesKYK/libros/azmtuq24hix47q3jbq4b.jpg'
  },
  {
    titulo: 'Mal Educada',
    descripcion: 'Un relato autobiográfico con mucho poder.',
    imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147871/imagesKYK/libros/bym1eirrmtwyadazvc3b.jpg'
  },
  {
    titulo: 'Harry Potter y La Orden Del Fenix',
    descripcion: 'Una novela intensa sobre la resistencia, la pérdida y el despertar del verdadero coraje. Más allá de la magia, es una lección sobre crecer en medio del caos.',
    imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147871/imagesKYK/libros/dic1mvqidoxlkoopz5ve.jpg'
  },
  {
    titulo: 'Pinocho',
    descripcion: 'Un libro mágico lleno de aventuras.',
    imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147872/imagesKYK/libros/aerp1pzls5rm0cnpxa02.jpg'
  },
  {
    titulo: 'El Principito',
    descripcion: 'Una historia poética con enseñanzas profundas.',
    imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147872/imagesKYK/libros/irtbaneb2qkhso30hafu.jpg'
  },
  {
    titulo: 'Hasta Que Caiga La Luna',
    descripcion: 'Una historia oscura y poderosa, donde la magia y el dolor caminan de la mano.',
    imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147873/imagesKYK/libros/ph9g88du1np1pxppflmo.jpg'
  }
]);


}
