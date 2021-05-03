import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
  @Output() eventFired = new EventEmitter<number>();
  lstEven: number[] = [];
  lstOdd: number[] = [];
  i: number = 1;
  interval;
  constructor() {}

  ngOnInit(): void {}
  onStart() {
    this.interval = setInterval(() => {
      this.eventFired.emit(this.i);
      this.i++;
    }, 1000);
  }
  onStop() {
    clearInterval(this.interval);
  }
}
