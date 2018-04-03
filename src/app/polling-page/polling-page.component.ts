import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-polling-page',
  templateUrl: './polling-page.component.html',
  styleUrls: ['./polling-page.component.css']
})
export class PollingPageComponent implements OnInit{

  ngOnInit(){
    Observable.interval(10 * 60).subscribe(x => {this.showM1(this.matchInfo.Time); this.showM2(this.matchInfo2.Time)});
  }

  showPollM1 = true;
  showPollM2 = true;
  url = 'assets/';

  // these vals will come from db or table
  matchInfo = {team1:'RCB', team2:'CSK', Venue: 'Bangalore' ,Date: '24th April 2018', Time: '16:00'};
  
  form = new FormGroup({
      name: new FormControl('',[Validators.required,]), // Default validation
      selectTeam: new FormControl('', [Validators.required,]), // Default validation
  },this.validateMember);

  validateMember(frm: FormGroup) {
    var membersList = ['Sachin', 'Amit', 'Selvi', 'Viji', 'Vivek', 'Vijay', 'Rakesh', 'Indu', 'Raks', 'Pawan', 'Satish', 'Divs'];
    if( membersList.indexOf(frm.get('name').value) === -1) {
      console.log('false');
      frm.get('name').setErrors( {validateMember: true} )}
      else {
        console.log('true');
        return null}}

  // Getter functions
  get name(){
    return this.form.get('name');
  }


  submitValue(){
    console.log(this.form.get('name').value);
    console.log(this.form.get('selectTeam').value);
  }

// ############################################################################################################

  // these vals will come from db or table
  matchInfo2 = {team1:'DD', team2:'RR', Venue: 'Delhi' ,Date: '24th April 2018', Time: '20:00'};

  //  if no 2nd match following this format as a workaround to avoid issue in ngOnInit() - Observable.interval  
  // matchInfo2 = {team1: null, team2: null, Venue: null ,Date: null, Time: '00:00'};

  form2 = new FormGroup({
      name2: new FormControl('',[Validators.required,]), // Default validation
      selectTeam2: new FormControl('', [Validators.required,]), // Default validation
  },this.validateMember2);

  validateMember2(frm2: FormGroup) {
    var membersList = ['Sachin', 'Amit', 'Selvi', 'Viji', 'Vivek', 'Vijay', 'Rakesh', 'Indu', 'Raks', 'Pawan', 'Satish', 'Divs'];
    if( membersList.indexOf(frm2.get('name2').value) === -1) {
      console.log('false');
      frm2.get('name2').setErrors( {validateMember2: true} )}
      else {
        console.log('true');
        return null}}

  // Getter functions
  get name2(){
    return this.form2.get('name2');
  }

  submitValue2(){
    console.log(this.form2.get('name2').value);
    console.log(this.form2.get('selectTeam2').value);
    var d = new Date();
    console.log(d.getHours()-1);
    console.log(d.getMinutes());
  }

  public getUrl(team: string): string {
    return this.url.concat(team).concat('.png');
  }

  public showM1(matchTime:string):any{
          
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes(); //keeping this for debugging
    var matchHour = +matchTime.split(':')[0]-1

    if (hour >= matchHour){
      this.showPollM1 = null;
    }
  console.log(matchHour, this.showPollM1, min, hour)

  }

  public showM2(matchTime:string):any{
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes(); //keeping this for debugging
    var matchHour = +matchTime.split(':')[0]-1

    if (hour >= matchHour){
      this.showPollM2 = null;
    }
  console.log(matchHour, this.showPollM2, min, hour) //keeping this for debugging
  
    }

}
