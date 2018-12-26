import { Component, Input, OnInit } from '@angular/core';

export class AgendaEntry {

  public focused = false;

  constructor(public title: string, public time: string, public active: boolean) {
  }
}

@Component({
  selector:    'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls:   ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  @Input() public showHeader = false;

  public entries: AgendaEntry[] = [];

  constructor() {
    this.entries.push(new AgendaEntry('Monday briefing with the team', '11:00 am', false));
    this.entries.push(new AgendaEntry('Lunch with Paul Mccartney ', '12:00 am', false));
    this.entries.push(new AgendaEntry('Meet clients from project', '14:00 pm', false));
    this.entries.push(new AgendaEntry('Watch sci-fi series', '20:45 pm', false));
    this.entries.push(new AgendaEntry('Customer dialog on Skype', '23:15 pm', false));
  }

  ngOnInit() {
  }

  public enterEntry(entry: AgendaEntry) {
    entry.focused = true;
  }

  public leaveEntry(entry: AgendaEntry) {
    entry.focused = false;
  }
}
