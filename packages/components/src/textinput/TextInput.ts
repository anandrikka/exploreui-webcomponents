import { LitElement, html } from '@exploreui/wc-core/dist/element';

export class TextInput extends LitElement {
  render() {
    return html`
      <input type="text" value="demo" />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'expui-textinput': TextInput
  }
}