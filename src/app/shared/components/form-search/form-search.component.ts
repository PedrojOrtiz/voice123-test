import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `
  <input
    #inputSearch
    autofocus 
    type="text"
    class="form-control-lg"
    placeholder="Search..."
    (keyup.enter)="onSearch(inputSearch.value)"
  />`,
  styles: ['input {width: 80%;}']
})
export class FormSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(value: string) {
    console.log(value)
    //if(value && value.length > 3) {
      this.router.navigate(['/actor-list'], {
        queryParams: {q : value},
      })
      //window.location.reload();
    //}
  }
}