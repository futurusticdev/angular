import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    MatGridListModule,
    MatExpansionModule,
    MatChipsModule,
    MatTabsModule
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  accreditations: string[] = [
    'American Veterinary Medical Association (AVMA)',
    'American Animal Hospital Association (AAHA)',
    'World Small Animal Veterinary Association (WSAVA)',
    'International Veterinary Academy of Pain Management'
  ];

  staffMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Veterinarian',
      image: 'assets/images/staff/sarah.jpg',
      bio: 'Dr. Johnson has over 15 years of experience in veterinary medicine, specializing in small animal care and surgery.',
      specialties: ['Surgery', 'Internal Medicine', 'Preventive Care']
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Veterinarian',
      image: 'assets/images/staff/michael.jpg',
      bio: 'Dr. Chen joined our team in 2018 and brings expertise in emergency medicine and exotic pet care.',
      specialties: ['Emergency Medicine', 'Exotic Pets', 'Dentistry']
    },
    {
      name: 'Emma Thompson',
      role: 'Lead Veterinary Technician',
      image: 'assets/images/staff/emma.jpg',
      bio: 'Emma has been with us since our founding and is certified in veterinary nursing and animal behavior.',
      specialties: ['Animal Behavior', 'Laboratory Work', 'Patient Care']
    },
    {
      name: 'James Wilson',
      role: 'Practice Manager',
      image: 'assets/images/staff/james.jpg',
      bio: 'James ensures our practice runs smoothly and maintains our high standards of care and service.',
      specialties: ['Practice Management', 'Client Relations', 'Team Leadership']
    }
  ];
}
