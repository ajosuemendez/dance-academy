import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'song',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
}