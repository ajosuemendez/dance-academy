import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'songs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
}