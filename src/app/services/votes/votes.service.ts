import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface NewsVote {
  title: string;
  description: string;
  createAt: string;
  category: string;
  [index: number]: { up: number; down: number; };
}

@Injectable()

export class VotesService {

  constructor(
    private http: HttpClient,
   ) { }

  getVoteList(){
    let url = 'http://localhost:4600/assets/mocks/votes-list.json';
    return this.http.get(url)
      .toPromise();
  }
}
