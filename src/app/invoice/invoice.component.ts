import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';




@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  @Input() percentage: number = 0;

    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  calculateDashOffset(): string {
    const circleLength = 94.24778; // Hardcoded value for simplicity, you might need to adjust this
    return (circleLength * (1 - this.percentage / 100)).toString();
  }



}
