import { Component, OnDestroy} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { APP_BASE_HREF } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';


  private product: string;
  private price: string;

  private querySubscription: Subscription;
  constructor(private route: ActivatedRoute, @Inject(APP_BASE_HREF) private baseHref:string){

    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.product = queryParam['product'];
        this.price = queryParam['price'];

        console.log(this.product, this.price, this.baseHref);
      }
    );
  }
  ngOnDestroy(){
    this.querySubscription.unsubscribe();
  }

  changeURL() {
    this.baseHref = '?product=phone&price=200';
    console.log(this.product, this.price, this);

  }
}
