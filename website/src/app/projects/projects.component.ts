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
      desc: "As a final project for a course at UofT we implemented a game centre in android studio \
      given only some base skeleton code. With this project being early in my CS career, it was good practice for learning how to \
      work on a project in a group setting, and how to work on a pre-existing code base in an unfamiliar development environment.",
      github: null,
      dates:"September 2018 - December 2018",
      points: ["Created a game centre with Minesweeper and 2048",
        "Implemented user authentication using Firebase",
      ]
    },
    quantum: {
      title: "Quantum Something",
      icon: "temp",
      languages: ["python"],
      desc: "Quantum computing is an interest of mine, so I have future projects in mind for it. I would like to go through the IBM \
      Qiskit tutorial to learn the API, and then attend one of the TRIUMF intro to quantum computing courses to learn more about the subject.",
      github: null,
      dates: "August 2021 - Present",
      points: []
    },
    smash: {
      title: "UofT Skule Smash Website",
      icon: "temp",
      languages: ["html", "css"],
      desc: "I was chosen to be the website admin for the UofT Skule Smash club. I had very minimal experience in this area prior to this, \
      and so the finished product was quite crude and basic since it was only written in static HTML and CSS. While this isnt a great project \
      on its own, I enjoy having it to see how far I've come as a developer and to see how much growth I've experienced.",
      github: "https://github.com/ethanakester/website",
      dates: "August 2018 - September 2018",
      points: ["Created the UofT Skule Smash website using static HTML and CSS",
        "Worked closely with club members to implement specific design choices",
      ]
    },
    webscraper: {
      title: "Python Webscraper",
      icon: "temp",
      languages: ["python"],
      desc: "This was the first project that I had attempted in my CS career. The motivation for it came when I was tasked to do very extensive \
      data entry during a summer job, and I was sure that there had to be a way to automate it. Having just finished first year I was still very \
      unfamiliar with using third party libraries or APIs, so despite the task itself being pretty simple, it was still a challenge for me. The code \
      itself isn't polished or refined, but it does allow me to see how far I've grown over my years as a developer.",
      github: "https://github.com/ethanakester/Python-Webscraper",
      dates: "July 2018 - August 2018",
      points: ["Used selenium webdrivers to find information from select websites",
        "Included openpyxl and xlsxwriter to be able to read from and write to excel sheets",
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
        "Secure and encrypted using verified HTTPS connection",
      ]
    },
    unity: {
      title: "Unity Game Development",
      icon: "temp",
      languages: ["c_sharp"],
      desc: "As part of a software engineering course at UofT we created a 2D educational game to the specifications given to us by a \
      Toronto based company HiGarden. This included bi-weekly meetings with them, as well as 4 deliverables over the course of the semester. \
      Being the only one in the group with experience working in Unity I was also required to give them a code walkthrough and help them \
      understand how to use the engine.",
      github: null,
      dates: "September 2020 - December 2020",
      points: ["Coordinated closely with Toronto based company HiGarden to deliver an MVP",
        "Practiced working in an agile environment with 5 other group members",
        "Created a 2D educational game for use by young school children",
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
