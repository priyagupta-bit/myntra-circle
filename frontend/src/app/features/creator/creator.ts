import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface FashionItem {

  id:number;

  name:string;

  image:string;

  price:string;

}
interface CreatorRoom {
  title: string;
  votes: number;
  status: string;
  participants: number;
  cover?: FashionItem[];
}


@Component({
  selector: 'app-creator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './creator.html',
  styleUrl: './creator.scss'
})
export class Creator {

  stats = [
    { title: 'Followers', value: '12.4K' },
    { title: 'Rooms Created', value: '18' },
    { title: 'Total Votes', value: '47K' },
    { title: 'Conversion', value: '21%' }
  ];

  catalog: FashionItem[] = [

  {
    id:1,
    name:'White Linen Dress',
    image:'https://images.unsplash.com/photo-1574655563118-3e3eab32015d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price:'₹1999'
  },

  {
    id:2,
    name:'Platform Heels',
    image:'https://images.unsplash.com/photo-1591884807537-0bce39888fe0?q=80&w=841&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price:'₹2499'
  },

  {
    id:3,
    name:'Pearl Earrings',
    image:'https://images.unsplash.com/photo-1590166223826-12dee1677420?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price:'₹899'
  },

  {
    id:4,
    name:'Raffia Tote',
    image:'https://plus.unsplash.com/premium_photo-1723652585936-332dc0b694a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price:'₹1299'
  },

  {
    id:5,
    name:'Summer Blazer',
    image:'https://plus.unsplash.com/premium_photo-1690034979506-cf086f51bd58?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price:'₹2899'
  },

  {
    id:6,
    name:'Minimal Watch',
    image:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price:'₹1599'
  }

];

toggleProduct(item:FashionItem){

  const index =
  this.selectedProducts.findIndex(p=>p.id===item.id);

  if(index>-1){

    this.selectedProducts.splice(index,1);

  }

  else{

    this.selectedProducts.push(item);

  }

}

selectedProducts: FashionItem[] = [];

  rooms: CreatorRoom[] = [
    {
      title: 'Goa Vacation Fits 🌴',
      votes: 1287,
      status: 'LIVE',
      participants: 312,
      cover: []
    },
    {
      title: 'Wedding Guest Looks 💍',
      votes: 824,
      status: 'Voting',
      participants: 201,
      cover: []
    },
    {
      title: 'Freshers Outfit Battle 🎓',
      votes: 653,
      status: 'Closed',
      participants: 178,
      cover: []
    }
  ];

  showModal = false;

  roomTitle = '';
  roomDescription = '';
  audience = 'Public';
  duration = '24 Hours';

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  publishRoom() {

    if (!this.roomTitle.trim()) {
      return;
    }
    cover:this.selectedProducts
    
    this.rooms.unshift({

      title: this.roomTitle,

      votes: 0,

      status: 'LIVE',

      participants: 0,

      cover: [...this.selectedProducts]


});


    this.roomTitle = '';
    this.roomDescription = '';
    this.audience = 'Public';
    this.duration = '24 Hours';
    this.selectedProducts = [];
    this.closeModal();

  }

}