import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component'




@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  ngOnInit(): void {
  }

  finished = ["webscraper", "smash", "android"];
  unfinished = ["quantum", "unity", "website"];
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
      title: "UofT Skule Smash Website",
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
  };

  constructor(private dialog: MatDialog) {}
  openDialog(obj){
    const dialogRef = this.dialog.open(ModalComponent, {
      // width: '250px', 
      data: {"title": obj.title, "langs": obj.langs, "desc": obj.desc}
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("Closed dialog");
    });
  }

}
