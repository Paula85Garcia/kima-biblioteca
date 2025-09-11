import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-header',
  standalone: true, // Asegúrate de marcar el componente como standalone
  imports: [RouterModule], // Importa RouterModule aquí
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Corrige a styleUrls
})
export class HeaderComponent { }
