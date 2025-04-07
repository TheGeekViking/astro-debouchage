import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Dp4MzAW7.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/contactpage.astro.mjs');
const _page1 = () => import('./pages/submit.astro.mjs');
const _page2 = () => import('./pages/villes.astro.mjs');
const _page3 = () => import('./pages/_city_.astro.mjs');
const _page4 = () => import('./pages/_slug_.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/contactpage.astro", _page0],
    ["src/pages/submit.astro", _page1],
    ["src/pages/villes.astro", _page2],
    ["src/pages/[city].astro", _page3],
    ["src/pages/[slug].astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c2edef6e-4422-45af-9e21-aca60f0676cc"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
