import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  @Input() title: string;
  @Input() langs: string[];
  @Input() desc: string;

  
  constructor(private dialogRef: MatDialog) {}
  openDialog() {
    this.dialogRef.open(ModalComponent);
  }

  ngOnInit(): void {
    console.log("langs: ", this.langs);
  }

}
