export default class Employee{
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
    this.phone = property;
  }

   // updateTitle
   updateTitle(property){
    this.Title = property;
   }
}