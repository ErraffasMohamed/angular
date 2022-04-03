import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Option } from '../models/option';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  
  url:string = "http://10.7.3.70:8080/WebServiceEtudiantOption";
  jsonServerUrl:string = ' http://localhost:4000/options'
  subject = new Subject<Option[]>();
  constructor(private http:HttpClient) { }
  addOption(option:Option){
    
    return this.http.post<Option>(this.jsonServerUrl,option);
  }
  deleteOption(nom:string){
    return this.http.delete<Option>(this.jsonServerUrl+'/'+nom);
  }
  listOption(){
    this.http.get<Option[]>(this.jsonServerUrl).subscribe(data=>{
      this.subject.next(data);
    });
    return this.subject.asObservable()
  }
}
