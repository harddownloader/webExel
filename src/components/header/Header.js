import {ExcelComponent} from '@core/ExcelComponent'

export class Header extends ExcelComponent {
  // constructor() {
  //   super()
  // }
  toHTML() {
    // return '<h1>Header</h1>'
    const component = document.createElement('h1')
    const text = document.createTextNode('Header')
    component.appendChild(text)
    return component
  }
}