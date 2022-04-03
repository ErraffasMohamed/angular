import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OptionService } from 'src/app/services/option.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-form-option',
  templateUrl: './form-option.component.html',
  styleUrls: ['./form-option.component.css']
})
export class FormOptionComponent implements OnInit {

  constructor(private service:OptionService,private dialog:MatDialog) { }


  form = new FormGroup({
    nom: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),

  });

  ngOnInit(): void {
  }
  addOption(){
    this.service.addOption(this.form.value).subscribe(data=>{
      this.service.listOption()
    })
  }
}
