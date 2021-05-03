import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input("srvElement") element: {
    name: string;
    type: string;
    content: string;
  };
  @ContentChild("contentParagraph") contentP!: ElementRef;
  constructor() {}
  ngAfterContentInit(): void {
    console.log(
      "ngAfterContentInit " + this.contentP.nativeElement.textContent
    );
  }

  ngOnInit(): void {
    console.log("OnInit " + this.contentP.nativeElement.textContent);
  }
}
