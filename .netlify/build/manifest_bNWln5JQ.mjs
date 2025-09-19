import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_Bm8ycQ81.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro%20Migration/astro-debouchage/","cacheDir":"file:///C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro%20Migration/astro-debouchage/node_modules/.astro/","outDir":"file:///C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro%20Migration/astro-debouchage/dist/","srcDir":"file:///C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro%20Migration/astro-debouchage/src/","publicDir":"file:///C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro%20Migration/astro-debouchage/public/","buildClientDir":"file:///C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro%20Migration/astro-debouchage/dist/","buildServerDir":"file:///C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro%20Migration/astro-debouchage/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"contactpage/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contactpage","isIndex":false,"type":"page","pattern":"^\\/contactpage\\/?$","segments":[[{"content":"contactpage","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contactpage.astro","pathname":"/contactpage","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"submit/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/submit","isIndex":false,"type":"page","pattern":"^\\/submit\\/?$","segments":[[{"content":"submit","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/submit.astro","pathname":"/submit","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"villes/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/villes","isIndex":false,"type":"page","pattern":"^\\/villes\\/?$","segments":[[{"content":"villes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/villes.astro","pathname":"/villes","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://debouchagesolutions.ca","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro Migration/astro-debouchage/src/pages/[city].astro",{"propagation":"none","containsHead":true}],["C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro Migration/astro-debouchage/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro Migration/astro-debouchage/src/pages/contactpage.astro",{"propagation":"none","containsHead":true}],["C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro Migration/astro-debouchage/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro Migration/astro-debouchage/src/pages/submit.astro",{"propagation":"none","containsHead":true}],["C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro Migration/astro-debouchage/src/pages/villes.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/contactpage@_@astro":"pages/contactpage.astro.mjs","\u0000@astro-page:src/pages/submit@_@astro":"pages/submit.astro.mjs","\u0000@astro-page:src/pages/villes@_@astro":"pages/villes.astro.mjs","\u0000@astro-page:src/pages/[city]@_@astro":"pages/_city_.astro.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"pages/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_bNWln5JQ.mjs","C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro Migration/astro-debouchage/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro Migration/astro-debouchage/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts":"_astro/MainLayout.astro_astro_type_script_index_0_lang.D_phra0y.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/cserg/OneDrive/Bureau/Clients/Miron/Astro Migration/astro-debouchage/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"btn-hamburger\"),e=document.getElementById(\"mobile-menu\"),s=document.getElementById(\"navbar-close\"),c=document.querySelectorAll(\"#mobile-menu a\"),d=document.getElementById(\"servicesBtn\"),o=document.getElementById(\"servicesDropDown\"),i=document.getElementById(\"mobileServicesBtn\"),l=document.getElementById(\"mobileservicesDropDown\");s.addEventListener(\"click\",()=>{e.classList.toggle(\"hidden\")});t.addEventListener(\"click\",()=>{e.classList.toggle(\"hidden\")});c.forEach(n=>{n.addEventListener(\"click\",()=>{e.classList.add(\"hidden\")})});d.addEventListener(\"click\",()=>{o.classList.toggle(\"hidden\")});i.addEventListener(\"click\",()=>{l.classList.toggle(\"hidden\")});document.getElementById(\"close-banner\").addEventListener(\"click\",function(){document.getElementById(\"banner\").style.display=\"none\"});"]],"assets":["/_astro/cityPhoto.B7trf9Qm.webp","/_astro/city-main.DdTA1-HT.webp","/_astro/hero-img.CnkGCBw8.webp","/_astro/anne.C-AeBIqY.png","/_astro/nadia.CsntZSbh.png","/_astro/5-star.Brm7nQzY.svg","/_astro/roboto-greek-400-normal.LPh2sqOm.woff2","/_astro/roboto-cyrillic-ext-400-normal.D76n7Daw.woff2","/_astro/roboto-cyrillic-400-normal.BiRJyiea.woff2","/_astro/roboto-vietnamese-400-normal.DhTUfTw_.woff2","/_astro/roboto-latin-400-normal.DXyFPIdK.woff2","/_astro/roboto-latin-ext-400-normal.DgXbz5gU.woff2","/_astro/logo.Cd48mRP5.svg","/_astro/roboto-greek-400-normal.IIc_WWwF.woff","/_astro/roboto-cyrillic-ext-400-normal.b0JluIOJ.woff","/_astro/roboto-cyrillic-400-normal.JN0iKxGs.woff","/_astro/roboto-latin-ext-400-normal.BSFkPfbf.woff","/_astro/roboto-vietnamese-400-normal.D5pJwT9g.woff","/_astro/montreal.D3uKqfbt.webp","/_astro/roboto-latin-400-normal.BVyCgWwA.woff","/_astro/beloeil.BNVqZyiS.webp","/_astro/brossard.BC2O08R9.webp","/_astro/boucherville.DiseOqEj.webp","/_astro/candiac.C0TUZ4j8.webp","/_astro/chambly.BZlKPQzH.webp","/_astro/carignan.Cz1wyAZe.webp","/_astro/chateauguay.BG6rMrNb.webp","/_astro/delson.B8jzZ84o.webp","/_astro/longueuil.D2gcKNry.webp","/_astro/laprairie.DsFscwc7.webp","/_astro/marieville.k0A0AaNA.webp","/_astro/richelieu.CzbDVOIK.webp","/_astro/mont-saint-hilaire.BwZenu1M.webp","/_astro/saint-basile.BPdZa8in.webp","/_astro/saint-constant.Crj9B9qz.webp","/_astro/saint-bruno.DfTW7PCb.webp","/_astro/saint-hyacinthe.BQZYJo1a.webp","/_astro/saint-jean.CVgFT5Jh.webp","/_astro/saint-mathieu.BT0iaflB.webp","/_astro/saint-julie.BTST0bR_.webp","/_astro/sainte-catherine.D0eCDuva.webp","/_astro/valley-og.Be6hZPBe.webp","/_astro/saint-lambert.D9B8S0vh.webp","/_astro/varennes.DkdPIOsG.webp","/_astro/cartoon.BSNjr9un.webp","/_astro/bath1.BFYLoiCh.webp","/_astro/bath2.CC5a5OYD.webp","/_astro/bath3.DcELPxeN.webp","/_astro/camera2.Bkkr9YuQ.webp","/_astro/camera1.BPjQHFuE.webp","/_astro/drain1.DcNVfN31.webp","/_astro/camera3.qmtEkcVq.webp","/_astro/drain2.9h72EqCR.webp","/_astro/hydro1.B0Hfpojy.webp","/_astro/drain3.C2S6wfCX.webp","/_astro/garage1.D6_6y86A.webp","/_astro/garage2.Dw_VFCtq.webp","/_astro/garage3.D4lHRv0p.webp","/_astro/hydro2.CRKGowEb.webp","/_astro/hydro3.g_2JGF3i.webp","/_astro/lavabo1.CzH-xVVy.webp","/_astro/lavabo3.B2nx-Krf.webp","/_astro/lavabo2.abFSi_OY.webp","/_astro/sink1.DgDvy1yj.webp","/_astro/sink2.dZZvOuTG.webp","/_astro/sink3.B6KjtfeP.webp","/_astro/toilet1.CMsrq4i_.webp","/_astro/toilet2.Dre4hlzx.webp","/_astro/toilet3.9xn0JS4H.webp","/_astro/city-main2.LFqce6Vd.webp","/_astro/_city_.DxTSwZSm.css","/favicon.png","/robots.txt","/images/hero-img.webp","/images/logo.svg","/images/montreal.webp","/images/cities/beloeil.webp","/images/cities/boucherville.webp","/images/cities/brossard.webp","/images/cities/candiac.webp","/images/cities/carignan.webp","/images/cities/cartoon.webp","/images/cities/chambly.webp","/images/cities/chateauguay.webp","/images/cities/city-main.jpg","/images/cities/city-main.webp","/images/cities/city-main2.jpg","/images/cities/city-main2.webp","/images/cities/cityPhoto.webp","/images/cities/delson.webp","/images/cities/laprairie.webp","/images/cities/longueuil.webp","/images/cities/marieville.webp","/images/cities/mont-saint-hilaire.webp","/images/cities/montreal.webp","/images/cities/richelieu.webp","/images/cities/saint-basile.webp","/images/cities/saint-bruno.webp","/images/cities/saint-constant.webp","/images/cities/saint-hyacinthe.webp","/images/cities/saint-jean.webp","/images/cities/saint-julie.webp","/images/cities/saint-lambert.webp","/images/cities/saint-mathieu.webp","/images/cities/sainte-catherine.webp","/images/cities/valley-og.webp","/images/cities/varennes.webp","/images/services/bath1.webp","/images/services/camera1.webp","/images/services/drain1.webp","/images/services/garage1.webp","/images/services/hero-img.webp","/images/services/hydro1.webp","/images/services/lavabo1.webp","/images/services/logo.svg","/images/services/sink1.webp","/images/services/toilet1.webp","/contactpage/index.html","/submit/index.html","/villes/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"8Xu503nDTlqrQj/SfUMrTp3yuKZD+ltQ+hvYIpGYtUE=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
