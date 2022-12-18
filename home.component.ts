import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { homePapers } from '../homePapers';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movie:homePapers[]=[];
  title: string|undefined;
  oku:boolean=false;


  constructor(private data: ApiServiceService,private _http: HttpClient) { }

  ngOnInit(): void {
    this.data.getMovie().subscribe(oku=>{
      // this.movie=oku['articles']
      this.movie=oku['production_companies']
      console.log(this.movie)
      
      
      


    })
    this.data.getMovies().subscribe(yaz=>{
      this.movie=yaz['results']
      console.log(this.movie)
    })


  }
  serch(){
    const result = this.movie.filter(s => s.original_title==this.title);
    this.movie=result
    if(this.movie.length>0){
      this.oku=true;

    }
    else{
      this.oku=false;
    }
    console.log(this.movie)
  }
 

}
