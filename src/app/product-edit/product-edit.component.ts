import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product:Product=new Product;
  //products:Product[];
  //response:any;
  productform:FormGroup;

  constructor(private service:ProductService,private route:ActivatedRoute,private formBuilder:FormBuilder,private toastr:ToastrService) { }
  id:number;

  ngOnInit() {
    this.id=this.route.snapshot.params["id"];
    console.log(this.id);
    this.productform=this.formBuilder.group({
      pid:null,
      pname:[Validators.compose([Validators.required])],
      pdesc:[Validators.compose([Validators.required])],
      price:[Validators.compose([Validators.required])],
      pdate:[Validators.compose([Validators.required])],
    });
    this.service.GetProduct(this.id).subscribe(x=>{
      this.product=x;
      console.log(x)

    });
    
    
  }

    get formControl()
    {
      return this.productform.controls;
    }
    updateProduct()
    {
      this.product.pid=this.productform.controls.pid.value;
      this.product.pname=this.productform.controls.pname.value;
      this.product.pdesc=this.productform.controls.pdesc.value;
      this.product.price=this.productform.controls.price.value;
      this.service.UpdateProduct(this.id,this.product).subscribe(res=>{
        this.toastr.warning('Update successfull','yipee!')
      })


    }
  }


