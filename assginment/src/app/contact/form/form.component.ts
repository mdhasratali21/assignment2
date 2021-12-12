import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  RegisterData(frmData:any){
    this.data.AddData(frmData).subscribe();
    alert(JSON.stringify(frmData));
  }
  
}
