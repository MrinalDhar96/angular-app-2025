import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  newAppointmnentTitle : string = "";
  newAppointmentDate : NgbDate | null = null;
  minDate: NgbDate;
  maxDate: NgbDate;

  appointments:Appointment[] = [];

  constructor(private calendar: NgbCalendar) {
    this.minDate = calendar.getToday();
    this.maxDate = calendar.getNext(calendar.getToday(), 'y', 2);
  }

  ngOnInit(): void {
    let savedAppointment = localStorage.getItem("appointments")
    this.appointments = savedAppointment ? JSON.parse(savedAppointment) : [];
  }

  addAppointment() {
    if(this.newAppointmnentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmnentTitle,
        date: new Date(this.newAppointmentDate.year, this.newAppointmentDate.month - 1, this.newAppointmentDate.day)
      }

      this.appointments.push(newAppointment)

      this.newAppointmnentTitle = "";
      this.newAppointmentDate = null;

      localStorage.setItem('appointments', JSON.stringify(this.appointments))
    }
  }

  setToday() {
    this.newAppointmentDate = this.calendar.getToday();
  }

  clearDate() {
    this.newAppointmentDate = null;
  }

  deleteAppointment(index:number) {
    this.appointments.splice(index, 1)
    localStorage.setItem('appointments', JSON.stringify(this.appointments))
  }
}
