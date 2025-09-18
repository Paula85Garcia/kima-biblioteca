import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
  autores = signal([
    {
      nombre: 'Gabriel García Márquez',
      biografia: 'Novelista, cuentista, dramaturgo y periodista colombiano, ganador del Premio Nobel de Literatura.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147871/imagesKYK/autores/jlujub5e8rauoge9jteq.jpg'
    },
    {
      nombre: 'Isabel Allende',
      biografia: 'Escritora chilena, conocida por su novela "La casa de los espíritus".',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147872/imagesKYK/autores/hflieqiozbs51ogfotjd.jpg'
    },
    {
      nombre: 'Jorge Luis Borges',
      biografia: 'Escritor argentino, poeta y ensayista, considerado uno de los más grandes escritores del siglo XX.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147873/imagesKYK/autores/esfepjnc5b72isnloir8.jpg'
    },
    {
      nombre: 'Mario Vargas Llosa',
      biografia: 'Novelista peruano, ganador del Premio Nobel de Literatura y uno de los escritores más influyentes de Latinoamérica.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147873/imagesKYK/autores/mario-vargas-llosa.jpg' 
    },
    {
      nombre: 'Laura Esquivel',
      biografia: 'Escritora mexicana conocida por su novela "Como agua para chocolate".',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147874/imagesKYK/autores/laura-esquivel.jpg' 
    }
  ]);
}
