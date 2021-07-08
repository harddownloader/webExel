import {ExcelComponent} from '@core/ExcelComponent'

export class Toolbar extends ExcelComponent {
  toHTML() {
    // return '<h1>Toolbar</h1>'
    const component = document.createElement('h1')
    const text = document.createTextNode('Toolbar')
    component.appendChild(text)
    return component
  }
}