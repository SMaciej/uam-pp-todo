export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;
  priority: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
