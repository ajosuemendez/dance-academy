import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
}