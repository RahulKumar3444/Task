import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cards = [
    { title: 'BTC', desc: 'Description 1', img: 'https://via.placeholder.com/80', price: '$10' },
    { title: 'TRXTEST', desc: 'Description 2', img: 'https://via.placeholder.com/80', price: '$15' },
    { title: 'LTCTEST', desc: 'Description 3', img: 'https://via.placeholder.com/80', price: '$20' },
    { title: 'DOGETEST', desc: 'Description 4', img: 'https://via.placeholder.com/80', price: '$25' },
    { title: 'USDT', desc: 'Description 5', img: 'https://via.placeholder.com/80', price: '$30' },
    { title: 'EUR', desc: 'Description 6', img: 'https://via.placeholder.com/80', price: '$35' },
    { title: 'GBP', desc: 'Description 7', img: 'https://via.placeholder.com/80', price: '$40' },
    { title: 'USD', desc: 'Description 8', img: 'https://via.placeholder.com/80', price: '$45' },
  ];
  users = [
    { name: 'Payment Received', date: '2025-04-18', price: 1250 },
    { name: 'Cashout', date: '2025-04-17', price: 850 },
    { name: 'Crypto Sent', date: '2025-04-16', price: 3200 },
    { name: 'Bank Transfer', date: '2025-04-15', price: 1900 },
    { name: 'Refund Processed', date: '2025-04-14', price: 780 },
    { name: 'Wallet Top-up', date: '2025-04-13', price: 1100 },
    { name: 'Service Payment', date: '2025-04-12', price: 2150 },
    { name: 'Payment Received', date: '2025-04-11', price: 920 },
    { name: 'Crypto Deposit', date: '2025-04-10', price: 2750 },
    { name: 'Cash Withdrawal', date: '2025-04-09', price: 1650 },
    { name: 'Card Recharge', date: '2025-04-08', price: 1300 },
    { name: 'Loan Disbursed', date: '2025-04-07', price: 3500 },
    { name: 'Bill Payment', date: '2025-04-06', price: 620 },
    { name: 'Merchant Payment', date: '2025-04-05', price: 1890 },
    { name: 'Payment Received', date: '2025-04-04', price: 1450 },
    { name: 'Subscription Fee', date: '2025-04-03', price: 499 },
    { name: 'Crypto Sent', date: '2025-04-02', price: 2100 },
    { name: 'Gift Card Redeemed', date: '2025-04-01', price: 750 },
    { name: 'Cashout', date: '2025-03-31', price: 880 },
    { name: 'Peer Transfer', date: '2025-03-30', price: 980 }
  ];
  
  getColor(name: string): string {
    // Simple color generator based on char code
    const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#FF9F1C', '#9D4EDD'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  }
  
}
