import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('card-list')
export class CardList extends LitElement {
  @property() title = null
  @property({type: Array}) cards = []

  render() {
    return html`
      ${this.renderTitle()}
      ${this.renderCards()}
    `
  }

  renderTitle() {
    if (this.title !== null)
      return html`<h3>${this.title}</h3>`
  }

  renderCards() {
    if (this.cards.length > 0)
      return html`
        <ul>
          ${this.cards.map(({symbol, content}) => html`
            <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'></link>
            <li>
              <i class='fa fa-${symbol}'></i>
              <p>${content}</p>
            </li>
          `)}
        </ul>
      `
  }
}
