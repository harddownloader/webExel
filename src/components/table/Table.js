import {ExcelComponent} from '@core/ExcelComponent'

export class Table extends ExcelComponent {
  toHTML() {
    // return '<h1>Table</h1>'
    const component = document.createElement('h1')
    const text = document.createTextNode('Table')
    component.appendChild(text)
    return component
  }
}