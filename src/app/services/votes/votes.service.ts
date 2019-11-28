import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

interface NewsVote {
  title: string;
  description: string;
  createAt: string;
  category: string;
  [index: number]: { up: number; down: number; };
}

@Injectable()

export class VotesService {

  public apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
   ) { }

  getVoteList(){
    //let url = 'http://localhost:4600/assets/mocks/votes-list.json';
    let url = `${this.apiUrl}/news`;
    console.log(url);
    return this.http.get(url)
      .toPromise();
  }

  vote(id, vote){
    let url = `${this.apiUrl}/news/${id}/vote`;
    console.log(url);
    return this.http.post(url, {vote: vote})
      .toPromise(); 
  }

}
