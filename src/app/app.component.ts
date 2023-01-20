import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ex1';

  button1Clicked = false;
  button2Clicked = false;

  get skills() {
    return this.personalInformations.get('skills') as FormArray;
  }

  get professionalExperience() {
    return this.personalInformations.get('professionalExperience') as FormArray;
  }

  personalInformations = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{3}$')]),
    phone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(13)]),
    skills: new FormArray([]),
    professionalExperience: new FormArray([])
  })

  addSkill() {
    this.skills.push(new FormControl(''));
  }
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  addExperience() {
    this.professionalExperience.push(new FormControl(''));
  }
  removeExperience(index: number) {
    this.professionalExperience.removeAt(index);
  }

  onSubmit() {
    if (this.personalInformations.valid) {
      console.log(this.personalInformations.value);
    }
  }

  ngOnInit(): void {
  }

  constructor() {
  }
}
