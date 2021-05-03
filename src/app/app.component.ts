import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [{ name: "Test", type: "server", content: "Testing" }];
  lstOdd: number[] = [];
  lstEven: number[] = [];

  onServerCreated(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBluePrintCreated(serverData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onFired(intNum: number) {
    if (intNum % 2 === 0) {
      this.lstEven.push(intNum);
    } else {
      this.lstOdd.push(intNum);
    }
  }
}
