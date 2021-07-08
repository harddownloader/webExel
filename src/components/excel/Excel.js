export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = document.createElement('div')
    console.log('this.components', this.components)
    
    this.components.forEach(Component => {
      const component = new Component()
      $root.insertAdjacentElement('beforeend', component.toHTML())
    });
    console.log($root)
    return $root
  }

  render() {
    this.$el.append(this.getRoot())
  }
}  