import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  locale = {
    info: {
      desc: "Computer Science",
      name: "Ethan Akester"
    },
    links: {
      facebook: "Facebook",
      github: "Github",
      linkedin: "Linkedin"
    },
    nav: {
      contact: "Contact",
      experience: "Experience",
      extras: "Extracurriculars",
      projects: "Projects",
      skills: "Skills"
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}