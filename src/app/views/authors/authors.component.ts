import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'] // Corrección de styleUrl a styleUrls
})
export class AuthorsComponent {
  autores = [
    {
      nombre: 'Gabriel García Márquez',
      biografia: 'Novelista, cuentista, dramaturgo y periodista colombiano, ganador del Premio Nobel de Literatura.',
      imagen: '/assets/images/autores/gabriel-garcia-marquez.jpg'
    },
    {
      nombre: 'Isabel Allende',
      biografia: 'Escritora chilena, conocida por su novela "La casa de los espíritus".',
      imagen: '/assets/images/autores/isabel-allende.jpg'
    },
    {
      nombre: 'Jorge Luis Borges',
      biografia: 'Escritor argentino, poeta y ensayista, considerado uno de los más grandes escritores del siglo XX.',
      imagen: '/assets/images/autores/jorge-luis-borges.jpg'
    }
  ];
}
