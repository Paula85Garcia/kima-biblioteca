import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { DetallesComponent } from '../../components/detalles/detalles.component';
import { LibrosService, Libro } from '../../services/libros.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent, HeaderComponent, RouterModule],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  searchText = signal('');
  libros = signal<Libro[]>([]);

  constructor(private librosService: LibrosService) {
    this.libros.set(this.librosService.getLibros());
  }

  librosFiltrados = computed(() => {
    const texto = this.searchText().toLowerCase().trim();
    if (!texto) return this.libros();

    return this.libros().filter(libro =>
      libro.titulo.toLowerCase().includes(texto) ||
      libro.autor.toLowerCase().includes(texto)
    );
  });
}
