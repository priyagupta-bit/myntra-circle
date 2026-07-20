import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  image: string;
  votes: number;
  price: string;
}
interface CatalogProduct{

  name:string;

  image:string;

  price:string;

}

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './room.html',
  styleUrl: './room.scss'
})
export class Room {

  members = [
    "Priya",
    "Riya",
    "Ananya",
    "Sara"
  ];
    showProductModal = false;

    catalog: CatalogProduct[] = [

    {
    name:'Floral Summer Dress',
    image:'https://plus.unsplash.com/premium_photo-1670444605883-f3fbf4fcfac8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price:'₹1999'
    },

    {
    name:'White Sneakers',
    image:'https://plus.unsplash.com/premium_photo-1723773743655-71e6b5961089?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price:'₹2499'
    },

    {
    name:'Pearl Earrings',
    image:'https://images.unsplash.com/photo-1682822749969-61a63203c501?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price:'₹899'
    },

    {
    name:'Beach Tote',
    image:'https://plus.unsplash.com/premium_photo-1689247409718-48408527fe97?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price:'₹1299'
    }

    ];
        openProductModal(){

this.showProductModal=true;

}

closeProductModal(){

this.showProductModal=false;

}

addProduct(item:CatalogProduct){

this.products.push({

id:Date.now(),

name:item.name,

image:item.image,

votes:0,

price:item.price

});

this.closeProductModal();

}

  showInviteModal = false;

  inviteLink =
  'https://myntra-together.app/invite/goa-trip';

  email = '';
    openInviteModal() {
  this.showInviteModal = true;
}

closeInviteModal() {
  this.showInviteModal = false;
}

copyInviteLink() {
  navigator.clipboard.writeText(this.inviteLink);
  alert('Invite link copied!');
}

sendInvite() {

  if (!this.email.trim()) return;

  alert(`Invitation sent to ${this.email}`);

  this.email = '';
}
  products = [
    {
      id:1,
      name:"White Linen Dress",
      image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700",
      votes:5,
      price:"₹1,999"
    },
    {
      id:2,
      name:"Platform Heels",
      image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700",
      votes:3,
      price:"₹2,499"
    },
    {
      id:3,
      name:"Pearl Earrings",
      image:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=700",
      votes:6,
      price:"₹899"
    },
    {
      id:4,
      name:"Raffia Tote Bag",
      image:"https://images.unsplash.com/photo-1767605522249-a2753627515b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      votes:4,
      price:"₹1,299"
    }
  ];

  activities = [
    "Priya voted for White Linen Dress ❤️",
    "Riya added Platform Heels 👠",
    "Ananya reacted 🔥",
    "Sara joined the Circle 🎉"
  ];

  aiMessages = [
    "Coastal neutral aesthetic detected.",
    "Linen fabrics are getting the highest engagement.",
    "Gold jewellery complements the selected outfits.",
    "The group is leaning towards minimalist styling."
  ];

  currentActivity = this.activities[0];
  currentAI = this.aiMessages[0];

  consensus = 83;

  constructor() {

    let activityIndex = 0;
    let aiIndex = 0;

    setInterval(() => {

      activityIndex =
        (activityIndex + 1) % this.activities.length;

      this.currentActivity =
        this.activities[activityIndex];

    }, 3000);

    setInterval(() => {

      aiIndex =
        (aiIndex + 1) % this.aiMessages.length;

      this.currentAI =
        this.aiMessages[aiIndex];

    }, 4500);

  }

  vote(product:any){

    product.votes++;

    this.consensus =
      Math.min(100, this.consensus + 1);

  }

}