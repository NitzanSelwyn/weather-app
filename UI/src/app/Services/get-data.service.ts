import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { isNull } from "util";

@Injectable({
  providedIn: "root"
})
export class GetDataService {
  constructor(private http: HttpClient) {}
  headers;

  ngOnInit() {
    this.headers = new HttpHeaders();
    this.headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    this.headers.append(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    this.headers.append(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    this.headers.append("Access-Control-Allow-Credentials", true);
  }

  GetBasicData(currLng, currLat): Observable<any> {
    return this.http.post<any>(
      "http://localhost:3000/api/weather/GetWeatherNow",
      {
        currLat,
        currLng
      },
      this.headers
    );
  }
}
