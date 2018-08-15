import { Component, OnInit } from '@angular/core';
import { HallService } from '../shared/hall.service';
import { MatDialog } from '@angular/material';
import { BuyDialogComponent } from '../components/buy-dialog/buy-dialog.component';

@Component({
  selector: 'app-hall-page',
  templateUrl: './hall-page.component.html',
  styleUrls: ['./hall-page.component.scss']
})
export class HallPageComponent implements OnInit {

  coordinates;
  row: number;
  place: number;

  constructor(
    private hallService: HallService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.coordinates = this.hallService.response.coordinates;
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

}
