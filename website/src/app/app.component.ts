import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
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
  constructor(private dialogRef: MatDialog) {}
  openDialog() {
    this.dialogRef.open(ModalComponent);
  }
}
