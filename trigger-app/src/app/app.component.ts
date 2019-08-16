import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  emailMsgForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.emailMsgForm = this.fb.group({
      to: ['', [Validators.required]],
      message: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      date: ['', [Validators.required]]
    });
  }

  submit() {
    console.log(this.emailMsgForm);
  }
}
