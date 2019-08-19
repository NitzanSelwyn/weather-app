import { Component, OnInit } from "@angular/core";
import { GetDataService } from "./Services/get-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "UI";
  currLat;
  currLng;

  data: any;
  currentweather;

  constructor(private serive: GetDataService) {}

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.currLat = position.coords.latitude;
        this.currLng = position.coords.longitude;

        this.serive.GetBasicData(this.currLng, this.currLat).subscribe(data => {
          console.log(data);
          this.currentweather = data["temperature"];
          console.log(this.currentweather);
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
