import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input()
  project: string;


  
  projects = {
    android: {
      title: "Android Studio Game Center",
      icon: "temp",
      languages: ["java"],
      desc: "temp1"
    },
    quantum: {
      title: "Quantum Something",
      icon: "temp",
      languages: ["python"],
      desc: "temp2"
    },
    smash: {
      title: "Skule Smash website",
      icon: "temp",
      languages: ["html", "css"],
      desc: "temp3"
    },
    webscraper: {
      title: "Python Webscraper",
      icon: "temp",
      languages: ["python"],
      desc: "temp4"
    },
    website: {
      title: "Personal Website",
      icon: "temp",
      languages:["angular", "css", "html", "javascript"],
      desc: "temp5"
    },
    unity: {
      title: "Unity Game Development",
      icon: "temp",
      languages: ["c_sharp"],
      desc: "temp6"
    }
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.project);
  }

}
