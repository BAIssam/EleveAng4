import { Component, OnInit } from '@angular/core';
import {Eleve} from '../../model/model.eleve';
import {EleveService} from '../../services/eleve.service';

@Component({
  selector: 'app-nouveau-eleve',
  templateUrl: './nouveau-eleve.component.html',
  styleUrls: ['./nouveau-eleve.component.css']
})
export class NouveauEleveComponent implements OnInit {

  eleve:Eleve = new Eleve();
  mode:number = 1;

  constructor(public eleveService:EleveService) { }

  ngOnInit() {
  }

  onSaveEleve(dataForm){

    this.eleveService.saveEleve(dataForm)
      .subscribe(data=>{
        this.eleve = data;
        this.mode = 2;
        this.eleve.anneeScolaire="";
        this.eleve.nom="";
        this.eleve.prenom="";
        this.eleve.classe="";
        this.eleve.numInscription=null;
        this.eleve.numDossier=null;
        this.eleve.numBoite=null;
        this.eleve.motifSortie="";
        this.eleve.observation="";
      },err => {
        console.log(JSON.parse(err._body).message );
      })
  }

}
