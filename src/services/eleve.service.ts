import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';
import {Eleve} from '../model/model.eleve';

@Injectable()
export class EleveService {
  constructor(public http:Http){

  }

  getEleves(): Observable<any>{
    return this.http.get("http://localhost:8080/eleves")
      .map(resp=>resp.json());
  }

  getEleve(id:number): Observable<any>{
    return this.http.get("http://localhost:8080/eleve/"+id)
      .map(resp=>resp.json());
  }

  findEleves(nom:string, prenom:string, annee:string, page:number, size:number): Observable<any>{
    return this.http.get("http://localhost:8080/chercherEleve?nom="+nom+
      "&prenom="+prenom+"&annee="+annee+ "&size="+size+"&page="+page)
      .map(resp=>resp.json());
  }

  saveEleve(eleve:Eleve): Observable<any>{
    return this.http.post("http://localhost:8080/eleve", eleve)
      .map(resp=>resp.json());
  }

  updateEleve(eleve:Eleve): Observable<any>{
    return this.http.put("http://localhost:8080/eleve/" + eleve.id, eleve)
      .map(resp=>resp.json());
  }

  deleteEleve(id:number): Observable<any>{
    return this.http.delete("http://localhost:8080/eleve/" + id)
      .map(resp=>resp.json());
  }
}
