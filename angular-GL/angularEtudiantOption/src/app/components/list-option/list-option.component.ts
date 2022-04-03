import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Option } from 'src/app/models/option';
import { OptionService } from 'src/app/services/option.service';

@Component({
  selector: 'app-list-option',
  templateUrl: './list-option.component.html',
  styleUrls: ['./list-option.component.css']
})
export class ListOptionComponent implements OnInit,OnChanges {
  options:Option[] = new Array<Option>();

  constructor(private service:OptionService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.listOption()
  }

  ngOnInit(): void {
    this.listOption()
  }
  listOption(){
    this.service.listOption().subscribe(data=>{
      this.options = data;
    })
  }
  onDeleteOption(nom:string){
    this.service.deleteOption(nom).subscribe(data=>{
      console.log(data);
      console.log(nom);
    })
    this.listOption();
  }

}
