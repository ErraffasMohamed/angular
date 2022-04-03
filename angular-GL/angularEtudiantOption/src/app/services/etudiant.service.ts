import { HttpClient } from '@angular/common/http';
import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService{
  subject = new Subject<Etudiant[]>();
  url:string = "http://10.7.3.70:8080/WebServiceEtudiantOption";
  jsonServerUrl:string = 'http://localhost:3000/etudiants'
  constructor(private http:HttpClient) { }


  addEtudiant(etudiant:Etudiant){

    return this.http.post<Etudiant>(this.jsonServerUrl,etudiant);
  }
  deleteEtudiant(cne:string){
    return this.http.delete(this.jsonServerUrl+'/'+cne);
  }
  listEtudiant(){
    this.http.get<Etudiant[]>(this.jsonServerUrl).subscribe(data=>{
      this.subject.next(data)
        });
    return this.subject.asObservable();    
  }

 
}
