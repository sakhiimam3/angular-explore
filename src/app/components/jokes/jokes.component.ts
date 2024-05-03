import { Component } from '@angular/core';
import { GetjokesService } from '../../services/getjokes.service';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent {
  jokes = "loading"
  constructor(private JokesData: GetjokesService) { }
  ngOnInit() {
    this.getAnotherJokes()
  }
   getAnotherJokes(){
    this.JokesData?.getJokes().subscribe((data: any) => {
      this.jokes = data.value
    })
   }
}
