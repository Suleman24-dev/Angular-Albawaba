import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalConfig, ModalComponent } from '../../_metronic/partials';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };


  valuestat:number;


  @ViewChild('modal') private modalComponent: ModalComponent;
  constructor() {}
  ngOnInit(): void {
    this.valuestat = 38;
  }

  async openModal() {
    return await this.modalComponent.open();
  }
}
