import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//import { MyserviceService } from './myservice.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  emailid;
  formdata;
  todaydate;
  componentproperty;
  
  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
         Validators.required,
         Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
   });
}
passwordvalidation(formcontrol) {
   if (formcontrol.value.length < 5) {
      return {"passwd" : true};
   }
//onClickSubmit() {alert("succefully submitted")}
} 
}
