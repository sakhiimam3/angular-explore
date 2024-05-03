import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, booleanAttribute, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountryCodePipe } from '../../pipes/country-code.pipe';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,CountryCodePipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  @Input() name =""
  @Input()  status = ""
  @Output() myEvent= new EventEmitter<string>()
  sendData(){
     this.myEvent.emit("hello from child component")
  }
    number="8328123"
  // name = 'sakhidad';
  // status = 'single';
  // isbtnDisabled = false;
  // inputVal = 'test';
  // users = [
  //   {
  //     name: 'noor',
  //     status: 'single',
  //     salary:3000
  //   },
  //   {
  //     name: 'fayaz',
  //     status: 'single',
  //     salary:3400

  //   },
  //   {
  //     name: 'baba',
  //     status: 'single',
  //     salary:1000

  //   },
  // ];
}
