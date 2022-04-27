import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  addRegister(formValue: NgForm) {
    console.log(formValue.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
