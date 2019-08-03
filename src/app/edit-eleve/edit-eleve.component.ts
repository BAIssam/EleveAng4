import { Component, OnInit } from '@angular/core';
import {Eleve} from '../../model/model.eleve';
import {ActivatedRoute, Router} from '@angular/router';
import {EleveService} from '../../services/eleve.service';

@Component({
  selector: 'app-edit-eleve',
  templateUrl: './edit-eleve.component.html',
  styleUrls: ['./edit-eleve.component.css']
})
export class EditEleveComponent implements OnInit {

  eleve:Eleve = new Eleve();
  mode:number=1;
  idEleve:number;

  constructor(public activatedRoute:ActivatedRoute,
              public eleveService:EleveService,
              public router:Router) {
    this.idEleve = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.eleveService.getEleve(this.idEleve)
      .subscribe(data=>{
        this.eleve=data;
      },err => {
        console.log(err);
      })
  }

  updateEleve(){
    this.eleveService.updateEleve(this.eleve)
      .subscribe(data=>{
        alert("Enregistrement effectue");
        console.log(data);
        this.router.navigate(['eleve']);
      },err => {
        console.log(err);
        alert("Enregistrement non effectue");
      })
  }

}
