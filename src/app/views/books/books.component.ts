import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent, HeaderComponent],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  searchText: string = '';

  libros = [
    {
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      descripcion: 'Un clásico de la literatura latinoamericana.',
      imagen: 'assets/images/libros/cien-anos.jpg'
    },
    {
      titulo: 'El círculo',
      autor: 'Dave Eggers',
      descripcion: 'Una novela sobre la era digital y la vigilancia.',
      imagen: 'assets/images/libros/circulo.jpg'
    },
    {
      titulo: 'Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      descripcion: 'La obra maestra de la literatura española.',
      imagen: 'assets/images/libros/don-quijote.jpg'
    }
  ];

  get librosFiltrados() {
    if (!this.searchText.trim()) {
      return this.libros;
    }
    return this.libros.filter(libro =>
      libro.titulo.toLowerCase().includes(this.searchText.toLowerCase()) ||
      libro.autor.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
