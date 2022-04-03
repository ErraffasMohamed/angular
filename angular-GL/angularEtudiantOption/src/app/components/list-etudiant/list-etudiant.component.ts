import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit{
  etudiants:Etudiant[] = new Array<Etudiant>()
  constructor(private service:EtudiantService) { }


  ngOnInit(): void {
    this.listEtudiant();
  }
  listEtudiant(){
    this.service.listEtudiant().subscribe(data=>{
      this.etudiants = data
    })
  }
  onDeleteEtudiant(cne:string){
    this.service.deleteEtudiant(cne).subscribe()
    this.listEtudiant();
  }

}
