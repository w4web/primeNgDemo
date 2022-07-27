import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  categories = [
    {label: 'Category 1', value: '1'},
    {label: 'Category 2', value: '2'},
    {label: 'Category 3', value: '3'}
  ];

  subCategories = [
    {label: 'Sub cate 1', value: '1'},
    {label: 'Sub cate 2', value: '2'},
    {label: 'Sub cate 3', value: '3'}
  ];

  date!: Date;

  form!: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      category: ['', [Validators.required]],
      subCategory: ['', [Validators.required]],
      date: ['', [Validators.required]]
    });

  }

  onSubmit() {

    this.submitted = true;

  }
  
}
