import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ObservableNotification } from 'rxjs';
import { Etudiant } from 'src/app/models/etudiant';
import { Option } from 'src/app/models/option';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { OptionService } from 'src/app/services/option.service';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent implements OnInit {
  options: Option[] = new Array<Option>();
  constructor(private service:EtudiantService,private serviceOp:OptionService) { 
   
  }
  form = new FormGroup({
    cne: new FormControl('',[Validators.required]),
    nom: new FormControl('',[Validators.required]),
    prenom: new FormControl('',[Validators.required]),
    option: new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
    this.listOption()
  }
  listOption(){
    this.serviceOp.listOption().subscribe(data=>{
      this.options = data;
    })
  }
  addEtudiant(){
    this.service.addEtudiant(this.form.value).subscribe(data=>{})
    this.service.listEtudiant()
  }

}
