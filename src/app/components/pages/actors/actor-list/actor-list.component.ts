import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { Actor } from '@app/shared/interfaces/actor.interface';
import { ActorService } from '@app/shared/services/actor.service';
import { filter, take } from "rxjs/operators";

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {

  providers: Actor[] = [];

  p: number = 1;

  pageNum = 1;
  private query: string;
  private hideScrollheight = 200;
  private showScrollheight = 500;

  constructor(private actorService: ActorService, private route: ActivatedRoute, private router:Router) { 
    this.onUrlChange();
  }

  ngOnInit(): void {
    this.getActorsByQuery();
  }

  goToLink(username: string){
    window.open("https://voice123.com/" + username, "_blank");
  }

  private onUrlChange():void{
    this.router.events
    .pipe(filter((event)=> event instanceof NavigationEnd))
    .subscribe(()=>{
      this.providers=[];
      this.pageNum=1;
      this.getActorsByQuery();
    });
  }

  private getActorsByQuery(): void {
    this.route.queryParams.pipe(
      take(1)
    ).subscribe( (params: ParamMap) => {
      console.log("params: ", params);
      this.query = params['q'];
      this.getDataFromService();
    })
  }

  private getDataFromService (): void {
    this.actorService.searchActor(this.query).pipe(
      take(1)
    ).subscribe( (res:any) => {
      if (res?.providers?.length) {
        
        const {providers} = res;
        this.providers = [... this.providers, ...providers]
        console.log("providers: ", providers);
      } else {
        this.providers = [];
      }

      
    })
  }

}
