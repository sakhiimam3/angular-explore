import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sinppet } from '../../models/sinppet';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-bin-detail',
  standalone: true,
  imports: [],
  templateUrl: './bin-detail.component.html',
  styleUrl: './bin-detail.component.css'
})
export class BinDetailComponent implements OnInit {
  id: any;
  snippetDetail:any
  constructor(private route: ActivatedRoute, private dbService:DbService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dbService.GetSingleSnippet(params['id']).then((data: any) => {
        this.snippetDetail=data
      })
    });


  }


}
