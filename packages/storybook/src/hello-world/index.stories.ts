// import { TemplateResult } from '@exploreui/lit';
import { html } from 'lit-html';
import '@exploreui/lit-hello-world/dist/effect';

export default {
  title: 'HelloWorldElement',
  component: 'lit-hello-world',
  argTypes: {},
};

// todo: Need to figure out what is wrong here: function format of `html imported from @exploreui/lit` is different from 'lit-html', though both are same.
const Template = () => html` <lit-html-element></lit-html-element> `;

export const Example = Template.bind({});
