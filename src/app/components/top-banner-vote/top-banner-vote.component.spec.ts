import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannerVoteComponent } from './top-banner-vote.component';

describe('TopBannerVoteComponent', () => {
  let component: TopBannerVoteComponent;
  let fixture: ComponentFixture<TopBannerVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBannerVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBannerVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
