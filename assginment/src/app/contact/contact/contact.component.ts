import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactList:any={};
  
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.GetData().subscribe(contact=>this.contactList=contact);
    }

  SortChange(e:any){
      if(e.target.value=='asc'){
       this.contactList.data.sort((a:any,b:any)=>a.first_name.localeCompare(b.first_name));
      }
      else{
        this.contactList.data.sort((a:any,b:any)=>b.first_name.localeCompare(a.first_name));
      }
  }
}
 

 
  


