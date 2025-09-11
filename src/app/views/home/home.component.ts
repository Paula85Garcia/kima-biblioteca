import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule, FooterComponent, HeaderComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  libros = [
    {
      titulo: 'Cien años de soledad',
      descripcion: 'Una novela que narra la historia de la familia Buendía.',
      imagen: 'assets/images/libros/cien-anos.jpg'
    },
    {
      titulo: 'El círculo',
      descripcion: 'Una novela de misterio y tecnología.',
      imagen: 'assets/images/libros/circulo.jpg'
    },
    {
      titulo: 'Don Quijote de la Mancha',
      descripcion: 'La famosa obra de Miguel de Cervantes.',
      imagen: 'assets/images/libros/don-quijote.jpg'
    }
  ];
}
