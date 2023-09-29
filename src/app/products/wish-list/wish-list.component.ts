import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  allWishlist: any = [];//To hold all wishlist items
  constructor(private api: ApiService) {

  }
  ngOnInit(): void {
    this.api.viewWishlist().subscribe((result: any) => {
      console.log(result);//wishlist products details
      this.allWishlist = result

    },
      (result: any) => {
        console.log(result.error);

      })
  }

  //delete wishlist item from wishlist
  deletWishlistItem(id: any) {
    this.api.deleteWishlistProduct(id).subscribe((result: any) => {
      this.allWishlist = result//Assign remaining wishlist items to wishlist
      alert("Product deleted successfully")
    })
  }
}
