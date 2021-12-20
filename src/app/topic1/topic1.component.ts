import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topic1',
  templateUrl: './topic1.component.html',
  styleUrls: ['./topic1.component.css'],
})
export class Topic1Component implements OnInit {
  year;
  city;

  constructor(private ar: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.year = this.ar.snapshot.paramMap.get('year');
    this.city = this.ar.snapshot.paramMap.get('city');

    //  Professionally this is preferred (internal navigation with routerLink)
    // this.ar.paramMap.subscribe((rm) => {
    //   this.year = rm.get('year');
    //   this.city = rm.get('city');
    // });
  }
}
