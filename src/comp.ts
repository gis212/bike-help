import { html, customElement, LitElement, property } from 'lit-element'

@customElement('my-comp')
export class MyComp extends LitElement {
  // @property() title = ''

  render() {
    // <h1>this is title ${this.title}</h1>
    return html`
      <h1>this is title</h1>
    `
  }
}
