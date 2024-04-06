import { Component, OnInit } from '@angular/core';
import { Istd } from '../models/student';

@Component({
  selector: 'app-std',
  templateUrl: './std.component.html',
  styleUrls: ['./std.component.scss']
})
export class StdComponent implements OnInit {
  stdArr : Array<Istd> = [
    {
      fname : 'jhon',
      lname : 'Deo',
      email : 'jd@gmail.com',
      contact : 12345607654
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onStdAdd(fname : HTMLInputElement, lname : HTMLInputElement, email : HTMLInputElement, contact : HTMLInputElement){
   if(fname.value && lname.value && email.value && contact.value){
    let newstd : Istd = {
      fname : fname.value,
      lname : lname.value,
      email : email.value,
      contact : +contact.value
    }
    console.log(newstd);
    fname.value = lname.value = email.value = contact.value = '';
    this.stdArr.push(newstd)
   }
  }

}
