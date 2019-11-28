import { Component, OnInit } from '@angular/core';

import { VotesService } from 'src/app/services/votes/votes.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  public showTopBannerNotification = true;
  public newsVotes: any = [];

  constructor(
    private votesService: VotesService
    ) { }

  ngOnInit() {
    this.getNewsVotes();
  }


  getNewsVotes(){
    this.votesService.getVoteList()
      .then( votes => {
        console.log(votes)
        this.newsVotes = votes['data'];
      })

  }

  vote(newsDoc){
    let vote = newsDoc.mySelectedVote;
    this.votesService.vote(newsDoc._id, vote)
      .then( result => {
        newsDoc.votes = result['votes'];
        newsDoc.mySelectedVote = null;
      })    
  }

  calculateVote(value, up, down){
    return Math.round((value * 100) / (up + down));
  }

}
