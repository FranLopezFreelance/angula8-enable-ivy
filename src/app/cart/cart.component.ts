import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[];
  total: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.getTotal();
  }

  getTotal(){
    let partial = 0;
    if(this.items.length){
      this.items.forEach(item => {
        partial += item.price;
      })
    }
    return partial;
  }

}
