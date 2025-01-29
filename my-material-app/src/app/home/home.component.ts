import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featuredServices = [
    {
      icon: 'pets',
      name: 'Wellness Exams',
      description: 'Comprehensive health checks and preventive care for your pets.'
    },
    {
      icon: 'healing',
      name: 'Surgery',
      description: 'Advanced surgical procedures with state-of-the-art equipment.'
    },
    {
      icon: 'local_hospital',
      name: 'Emergency Care',
      description: '24/7 emergency veterinary services for urgent situations.'
    },
    {
      icon: 'science',
      name: 'Diagnostics',
      description: 'Advanced diagnostic testing and laboratory services.'
    }
  ];

  testimonials = [
    {
      text: 'The care and attention our dog received was exceptional. The staff went above and beyond.',
      author: 'John Smith',
      petName: 'Max'
    },
    {
      text: 'Best veterinary clinic in the area! Professional, caring, and always available.',
      author: 'Sarah Johnson',
      petName: 'Luna'
    },
    {
      text: 'They treated our cat like family. Highly recommend their services!',
      author: 'Mike Wilson',
      petName: 'Whiskers'
    }
  ];

  blogPosts = [
    {
      title: 'Summer Pet Safety Tips',
      date: 'January 25, 2024',
      excerpt: 'Keep your pets safe and comfortable during the hot summer months with these essential tips.'
    },
    {
      title: 'Understanding Pet Vaccinations',
      date: 'January 20, 2024',
      excerpt: 'Learn about the importance of vaccinations and recommended schedules for your pets.'
    },
    {
      title: 'Dental Care for Pets',
      date: 'January 15, 2024',
      excerpt: "Maintain your pet's oral health with these dental care guidelines and tips."
    }
  ];
}
