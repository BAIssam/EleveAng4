import { Component, OnInit } from '@angular/core';
import {EleveService} from '../../services/eleve.service';
import {Router} from '@angular/router';
import {Eleve} from '../../model/model.eleve';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})
export class EleveComponent implements OnInit {

  pageEleves:any;
  pNom:string="";
  pPrenom:string="";
  pAnnee:string="";
  currentPage:number=0;
  size:number=20;
  pages:Array<number>;

  constructor(public eleveService:EleveService, public router:Router) { }

  ngOnInit() {
    this.eleveService.getEleves()
      .subscribe(data=>{
        this.pageEleves=data;
      },err =>{
        console.log(err);
      } )
  }

  doSearch(){
    this.eleveService.findEleves(this.pNom, this.pPrenom, this.pAnnee, this.currentPage, this.size)
      .subscribe(data=>{
        this.pageEleves=data;
        this.pages = new Array(data.totalPages);
      },err =>{
        console.log(err);
      } )
  }

  chercher(){
    this.doSearch();
  }

  goToPage(i:number){
    this.currentPage=i;
    this.doSearch();
  }

  onEditEleve(id:number){
    this.router.navigate(['/editEleve', id]);
  }

  onDeleteEleve(e:Eleve){

    let confirm=window.confirm("Etes vous sure de vouloir supprimer cet eleve");

    if(confirm==true){
      this.eleveService.deleteEleve(e.id)
        .subscribe(data=>{
          this.pageEleves.content.splice(
            this.pageEleves.content.indexOf(e),1
          )

        }, err=>{
          console.log(err);
        })
    }

  }

}
