import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-avance',
  templateUrl: './avance.component.html',
  styleUrls: ['./avance.component.css']
})
export class AvanceComponent {
  registerForm:any = FormGroup;
submitted = false;
selectedValue: string = '';
constructor( private formBuilder: FormBuilder){}
//Add user form actions
get f() { return this.registerForm.controls; }
onSubmit() {
  
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  //True if all the fields are filled
  if(this.submitted)
  {
    alert("Great!!");
  }
 
}
  ngOnInit() {
    //Add form validations
     this.registerForm = this.formBuilder.group({
      ffrom: ['', [Validators.required]],
      fto: ['', [Validators.required]],
      dparting: ['', [Validators.required]],
      returning: ['', [Validators.required]],
      adults: ['', [Validators.required]],
      children: ['', [Validators.required]],
      travel: ['', [Validators.required]],
      roundtripopt: ['', [Validators.required]],
           
      });
  }



}


