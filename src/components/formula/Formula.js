import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
  toHTML() {
    // return '<h1>Formula</h1>'
    const component = document.createElement('h1')
    const text = document.createTextNode('Formula')
    component.appendChild(text)
    return component
  }
}