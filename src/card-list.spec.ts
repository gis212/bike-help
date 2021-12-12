import '../public/main'
import { fixture, assert } from '@open-wc/testing'
import { html } from 'lit/static-html.js'

it('is empty when given nothing', async () => {
  let el = await fixture(html`<card-list />`)
  assert.shadowDom.equal(el, ``)
})

it('shows a given title', async () => {
  let el = await fixture(html`<card-list title='bike' />`)
  assert.shadowDom.equal(el, `<h3>bike</h3>`)
})

it('shows nothing, given an empty cards array', async () => {
  let el = await fixture(html`<card-list cards='${ JSON.stringify([]) }' />`)
  assert.shadowDom.equal(el, ``)
})

it('shows a given card', async () => {
  let cards = [{
    symbol: 'some-symbol',
    content: 'some-content',
  }]
  let el = await fixture(html`<card-list cards=${ JSON.stringify(cards) } />`)
  assert.shadowDom.equal(el, `
    <ul>
      <li>
        <i class='fa fa-some-symbol'></i>
        <p>some-content</p>
      </li>
    </ul>
  `)
})
