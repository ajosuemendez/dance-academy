import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'course',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
}