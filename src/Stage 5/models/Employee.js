import React, {Component} from 'react'

export default class Employee extends Component{
  // constructor
  constructor(id,name,phone,title){
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.title = title;
  }
  
  // updateName
  updateName(property){
    this.name = property;
  }

  // updatePhone
  updatePhone(property){
    this.phone = phone;
  }

   // updateTitle
   updateTitle(property){
    this.Title = title;
   }
}