import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SizerComponent } from '../sizer/sizer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule,SizerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent {
  constructor(private dbService: DbService) {}
  items: { id: string; title: string }[] = [];
  ngOnInit() {
    this.dbService.getAllSnippet().then((data: any) => {
      console.log(data);
      this.items = data;
    });
  }
}
