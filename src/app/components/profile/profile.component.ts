import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user = {
    name: 'Kayla Sarah',
    email: 'anurag@example.com',
    phone: '+91 9876543210',
    address: '123 Main Street, Agra, UP',
    city: 'Agra',
    country: 'India',
    profileText: 'Passionate developer and coffee enthusiast.',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=AnuragSharma'
  };
}
