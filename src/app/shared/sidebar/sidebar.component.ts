import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    { name: 'Dashboard', icon: 'fa-solid fa-chart-line', route: '/dashboard' },
    { name: 'Wallets', icon: 'fa fa-user', route: '/home' }
  ];
  
  activities = [
    { name: 'Transactions', icon: 'fa-solid fa-chart-line', route: '/home' },
    { name: 'Deposit Money', icon: 'fa fa-user', route: '/home' },
    { name: 'Send Money', icon: 'fa fa-cogs', route: '/home' },
    { name: 'Request Money', icon: 'fa fa-sign-out', route: '/home' },
    { name: 'Exchange Money', icon: 'fa fa-sign-out', route: '/home' },
    { name: 'Withdrawal', icon: 'fa fa-sign-out', route: '/home' },
    { name: 'Crypto Exchange', icon: 'fa fa-sign-out', route: '/home' },
    { name: 'Investments', icon: 'fa fa-sign-out', route: '/home' }
  ];
  
  others = [
    { name: 'Disputes', icon: 'fa-solid fa-chart-line', route: '/home' },
    { name: 'Tickets', icon: 'fa-solid fa-ticket', route: '/home' },
    { name: 'Profile', icon: 'fa fa-user', route: '/profile' },
    { name: 'Verification', icon: 'fa-solid fa-gear', route: '/home' }
  ];
  
}
