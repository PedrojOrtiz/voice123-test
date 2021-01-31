import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  public baseUrl = "https://api.sandbox.voice123.com/providers/search/?service=voice_over&keywords=search%20text&page=1";
  public searchResults: any;

    public searchEntries(term): Observable<any> {
        if (term === "") {
            console.log("Not Defined");
            //return empty
        } else {
            let params = { q: term }
            return this.httpClient.get(this.baseUrl, {params}).pipe(
                map(response => {
                    console.log(response);
                    return this.searchResults = response["items"];
                    
                })
            );
        }
    }

    public _searchEntries(term) {
        return this.searchEntries(term);
    }

}
