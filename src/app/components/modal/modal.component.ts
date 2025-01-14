import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/sevices/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  display$!: Observable<any>;
  @Input() title: string = 'Agregar jugador';

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }
}
