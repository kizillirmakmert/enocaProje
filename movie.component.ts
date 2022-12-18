import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { homePapers } from '../homePapers';
import { ApiServiceService } from '../api-service.service';
import { movie } from '../movie';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie:homePapers[]=[];
  moviess=new homePapers();

  movies:movie[]=[];
  title: string|undefined;

  dizi:any[]=[];

  oku:boolean=false;
  imagebatc="https://image.tmdb.org/t/p/w500/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png"
  


  constructor(private data: ApiServiceService,private _http: HttpClient) { }

  ngOnInit(): void {
    // this.data.getMovie().subscribe(oku=>{
    //   // this.movie=oku['articles']
    //   this.movie=oku['production_companies']
    //   console.log(this.movie)
    //   console.log("yaz"+this.movies)

    //   console.log(this.imagebatc+this.yaz.logo_path)
      

    //   const result = this.movie.filter(s => s.logo_path);
    //   this.movies=result
      
      
      
    //   if(result.length==null){
    //     oku==true
    //   }
    //   else{
    //     oku==true
    //   }


      
      


    // })
    this.data.getMovies().subscribe(yaz=>{
       this.movies=yaz['results']
       console.log(this.movies)

     
      for(var i = 0; i < this.movies.length; i++) {
        
        this.moviess.backdrop_path=this.movies[i].backdrop_path
        this.title=this.movies[i].backdrop_path
        console.log(this.moviess.backdrop_path=this.title)
        
      
        
        if(i==3){
          break
        }

      }
    })

   
  }
  clickİmage(){
    alert("mert")
  }
 

}

