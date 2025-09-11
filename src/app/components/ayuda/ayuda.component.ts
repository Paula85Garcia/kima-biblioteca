import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-ayuda',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.scss']
})
export class AyudaComponent {}
