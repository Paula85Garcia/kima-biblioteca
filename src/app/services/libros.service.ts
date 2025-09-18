import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// Actualizar la interfaz Libro para incluir la propiedad temas
export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  imagen: string;
  temas?: string[]; // Añadir esta línea para incluir temas
}

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  private libros: Libro[] = [
    {
      id: 1,
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      descripcion: 'Un clásico de la literatura latinoamericana.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147879/imagesKYK/libros/mp47go4jeex1y9pfbgkx.jpg',
      temas: ['realismo mágico', 'literatura latinoamericana'], // Ejemplo de temas
    },
    {
      id: 2,
      titulo: 'El círculo',
      autor: 'Dave Eggers',
      descripcion: 'Una novela sobre la era digital y la vigilancia.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147878/imagesKYK/libros/gkwxxofdu7zk2fcbgj61.webp',
      temas: ['distopía', 'tecnología'], // Ejemplo de temas
    },
    {
      id: 3,
      titulo: 'Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      descripcion: 'La obra maestra de la literatura española.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147878/imagesKYK/libros/azmtuq24hix47q3jbq4b.jpg',
      temas: ['novela', 'aventura'], // Ejemplo de temas
    },
    {
      id: 4,
      titulo: 'La historia del tiempo',
      autor: 'Stephen Hawking',
      descripcion: 'Desde el Big Bang hasta los agujeros negros.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147880/imagesKYK/libros/dic1mvqidoxlkoopz5ve.jpg',
      temas: ['ciencia', 'cosmología'], // Ejemplo de temas
    },
    {
      id: 5,
      titulo: 'El arte de la guerra',
      autor: 'Sun Tzu',
      descripcion: 'Un tratado militar convertido en clásico de estrategia.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147880/imagesKYK/libros/ph9g88du1np1pxppflmo.jpg',
      temas: ['estrategia', 'filosofía'], // Ejemplo de temas
    },
    {
      id: 6,
      titulo: '1984',
      autor: 'George Orwell',
      descripcion: 'Distopía política que marcó la literatura moderna.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147881/imagesKYK/libros/bym1eirrmtwyadazvc3b.jpg',
      temas: ['distopía', 'política'], // Ejemplo de temas
    },
    {
      id: 7,
      titulo: 'Matar a un ruiseñor',
      autor: 'Harper Lee',
      descripcion: 'Clásico sobre la injusticia racial en Estados Unidos.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147882/imagesKYK/libros/aerp1pzls5rm0cnpxa02.jpg',
      temas: ['justicia', 'raza'], // Ejemplo de temas
    },
    {
      id: 8,
      titulo: 'Los juegos del hambre',
      autor: 'Suzanne Collins',
      descripcion: 'Una joven lucha por sobrevivir en una sociedad distópica.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147883/imagesKYK/libros/irtbaneb2qkhso30hafu.jpg',
      temas: ['distopía', 'supervivencia'], // Ejemplo de temas
    }
  ];

  getLibros() {
    return this.libros;
  }

  getLibroPorId(id: number) {
    return this.libros.find(libro => libro.id === id);
  }
}
