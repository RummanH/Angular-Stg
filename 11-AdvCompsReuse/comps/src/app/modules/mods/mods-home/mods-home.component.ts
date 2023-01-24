import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  items = [
    {
      title: 'What is Angular',
      content:
        'A component-based framework for building scalable web applications',
    },
    {
      title: 'What is React',
      content:
        'React is a free and open-source front-end JavaScript library for building user interfaces',
    },
    {
      title: 'What is Next.js',
      content:
        'Next.js is a React framework that gives you building blocks to create web applications.',
    },
    {
      title: 'What is Node',
      content:
        'Node.js is an open source server environment for building backend application with javaScript',
    },
    {
      title: 'What is Express',
      content:
        'Express is a minimal and flexible Node.js web application framework that more features on top of node',
    },
    {
      title: 'what is mongoDB',
      content:
        'MongoDB is a document database with the scalability and flexibility that you want',
    },
  ];
  modalOpen = false;
  onClick() {
    this.modalOpen = !this.modalOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}
