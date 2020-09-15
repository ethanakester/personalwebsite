import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  locale = {
    intro1: "Hey there, I'm",
    intro2: "I'm currently a 3rd year student at the University of Toronto pursuing my undergrad in computer science.",
    intro3: "I'm into web design, video games, music, and climbing. In my free time you can find me at a climbing gym, on the piano, or at my computer.",
    construction: "This website is currently under construction, but I'm working on it as often as I can. Check back here soon to see the completed version!",
    name: "Ethan Akester"
  }
  constructor() { }

  ngOnInit(): void {
  }

  print(): void {
    console.log("test");
    document.body.style.backgroundColor = "red";
  }

  onScroll(): void {
    console.log("TESTTEST");
  }

}
