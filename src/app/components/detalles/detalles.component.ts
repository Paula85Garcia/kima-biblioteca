import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LibrosService, Libro } from '../../services/libros.service';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent {
  route = inject(ActivatedRoute);
  librosService = inject(LibrosService);
  id = Number(this.route.snapshot.paramMap.get('id'));
  libro: Libro | undefined;

  constructor() {
    this.libro = this.librosService.getLibroPorId(this.id);
  }
}
