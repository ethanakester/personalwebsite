import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  @Input() title: string;
  @Input() langs: string[];
  @Input() desc: string;

  constructor() {}

  ngOnInit(): void {
  }

}
