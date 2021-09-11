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

  finished = ["website", "unity", "android", "smash", "webscraper"];
  unfinished = ["quantum"];
  projects = {
    android: {
      title: "Android Studio App",
      icon: "temp",
      languages: ["java"],
      desc: "temp1",
      github: null,
      dates:"September 2018 - December 2018",
      points: ["a",
        "b",
        "c",
      ]
    },
    quantum: {
      title: "Quantum Something",
      icon: "temp",
      languages: ["python"],
      desc: "temp2",
      github: null,
      dates: "August 2021 - Present",
      points: ["a",
        "b",
        "c",
      ]
    },
    smash: {
      title: "UofT Skule Smash Website",
      icon: "temp",
      languages: ["html", "css"],
      desc: "temp3",
      github: "https://github.com/ethanakester/website",
      dates: "August 2018 - September 2018",
      points: ["a",
        "b",
        "c",
      ]
    },
    webscraper: {
      title: "Python Webscraper",
      icon: "temp",
      languages: ["python"],
      desc: "temp4",
      github: "https://github.com/ethanakester/Python-Webscraper",
      dates: "July 2018 - August 2018",
      points: ["a",
        "b",
        "c",
      ]
    },
    website: {
      title: "Personal Website",
      icon: "temp",
      languages:["angular", "css", "html", "javascript"],
      desc: "This is the website you are currently browsing! The primary focus of this project was to learn about every aspect of creating a \
      website from the start since previously in my experience at IBM I had only worked on a pre-existing product, and I wanted to be able to \
      control the higher level design decisions such as which front end/back end to use, where to host the website, etc.",
      github: "https://github.com/ethanakester/personalwebsite",
      dates: "July 2021 - September 2021",
      points: ["Frontend implemented using Angular 10",
        "Running remotely on an AWS EC2 instance",
        "Uses an NginX server as the backend",
        "Secure and encrypted using verified HTTPS connection"
      ]
    },
    unity: {
      title: "Unity Game Development",
      icon: "temp",
      languages: ["c_sharp"],
      desc: "temp6",
      github: null,
      dates: "September 2020 - December 2020",
      points: ["a",
        "b",
        "c",
      ]
    }
  };

  constructor(private dialog: MatDialog) {}
  openDialog(obj){
    const dialogRef = this.dialog.open(ModalComponent, {
      // width: '250px', 
      data: {"title": obj.title, "desc": obj.desc, "github": obj.github, "points": obj.points}
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("Closed dialog");
    });
  }

}
