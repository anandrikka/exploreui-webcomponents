const esbuild = require('esbuild');
const glob = require('globby');

const dev = process.argv.includes('--dev') || false;

(async () => {
  const componentEntryPoints = await glob('./src/**/!(*.test).ts');
  try {
    const buildResult = await esbuild.build({
      format: 'esm',
      target: 'esnext',
      entryPoints: [
        './src/index.ts',
        ...componentEntryPoints
      ],
      outdir: '/dist',
      bundle: true,
      chunkNames: 'chunks/[name].[hash]',
      splitting: false,
      watch: dev
    })
  } catch (e) {
    console.error(e)
  }
})();