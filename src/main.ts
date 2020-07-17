import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

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




platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

