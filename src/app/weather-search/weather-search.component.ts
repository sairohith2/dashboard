import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnChanges {

  city: string = '';
  @Output() citySelected = new EventEmitter<string>();
  @Input() clearInput: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
     if (changes['clearInput'] && changes['clearInput'].currentValue) {
      this.city = '';
      this.clearInput = false; 
    }
  }

  searchWeather() {
    if(this.city.trim()){
      this.citySelected.emit(this.city);
    }
     else{
      this.citySelected.emit(''); 
    }
    console.log('Searching weather for:', this.city);
  }
}
