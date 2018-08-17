import { Component, OnInit } from '@angular/core';
import { HallService } from '../shared/hall.service';
import { MatDialog } from '@angular/material';
import { BuyDialogComponent } from '../components/buy-dialog/buy-dialog.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-hall-page',
  templateUrl: './hall-page.component.html',
  styleUrls: ['./hall-page.component.scss']
})
export class HallPageComponent implements OnInit {

  coordinates;
  numCoordinatesLeft = [];
  numCoordinatesRight = [];
  screenCoordinates;
  selectedPlaces = [];
  row: number;
  place: number;

  constructor(
    private hallService: HallService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.coordinates = this.hallService.response.coordinates;

    this.calculateRowCoordinates();
    this.getScreenCoordinates();
  }

  openDialog(place) {
    this.row = place.dataset.row;
    this.place = place.dataset.place;
    const dialogRef = this.dialog.open(BuyDialogComponent, {
      width: '250px',
      data: {
        row: this.row,
        place: this.place
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Ряд: ${this.row}, место ${this.place}`);
      }
    });
  }

  calculateRowCoordinates() {
    const rowsNumbers = _.uniq(this.hallService.response.coordinates.map((item) => item.row));
    const coordXMin = _.min(this.hallService.response.coordinates.map((item) => +item.x));
    const coordXMax = _.max(this.hallService.response.coordinates.map((item) => +item.x));

    for (let i = 0; i < rowsNumbers.length; i++) {
      this.numCoordinatesLeft.push({
        'num': rowsNumbers[i],
        'y': _.find(this.hallService.response.coordinates, {'row': rowsNumbers[i]}).y,
        'x': coordXMin
      });
    }

    for (let i = 0; i < rowsNumbers.length; i++) {
      this.numCoordinatesRight.push({
        'num': rowsNumbers[i],
        'y': _.find(this.hallService.response.coordinates, {'row': rowsNumbers[i]}).y,
        'x': coordXMax
      });
    }
  }

  getScreenCoordinates() {
    this.screenCoordinates = {
      'width': _.max(this.hallService.response.coordinates.map((item) => +item.x)) -
      _.min(this.hallService.response.coordinates.map((item) => +item.x))
    };
  }

  selectPlace(place) {
    if (!place.classList.contains('disabled')) {
      place.classList.toggle('selected');
    }
  }

}
