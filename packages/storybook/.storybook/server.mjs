import { storybookPlugin } from '@web/dev-server-storybook';

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  nodeResolve: true,
  open: '/',
  watch: true,
  plugins: [
    storybookPlugin({ type: 'web-components' })
  ],
});