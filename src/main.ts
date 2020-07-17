import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLocaleData } from '@angular/common';

//interfaces

interface Todo{
  title: string;
  text: string;
}

function showTodo(todo: Todo){
  console.log(todo.title + ': ' + todo.text);
}
let myTodo = {title: 'trash', text: 'take out trash'}

showTodo(myTodo);

interface Person{
  name: string;
  email: string;
  age: number;
}

class User{

  person: Person;
  constructor(person: Person){
    this.person= person;
    console.log("user created " + this.person.name);
  }
  register(){
    console.log(this.person.name + " is registered");
  }
  payInvoice(){
    console.log(this.person.name + " paid invoice");
  }
}
let john = new User({name: 'bob', email: 'bob@gmail.com', age: 16});

john.register();
console.log(john.person.name + "aaa");

class Member extends User{
  id: number;
  constructor(person: Person, id: number){
    super(person);
    this.id = id;
  }
  payInvoice(){
    super.payInvoice();
  }
}
let mike: User = new Member({name: 'mike', email:'wazowski',age: 18},2);
console.log(mike.payInvoice());

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

