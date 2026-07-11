
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/community"
  },
  {
    "renderMode": 2,
    "route": "/**"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 71904, hash: 'bfaf4aed5e5fb9ca0afb8438d7bcfda88bda3ab8be4844473d870c95edaa5bf5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17197, hash: '3ab7d56f5225f913f529d904238878ab5a627a4ecf98e6cd25492a86dea7e151', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 88550, hash: '348d7d3639ab6f4d784ed469d677d1d386dda7767148ed6fbabcc3587e5ddc7b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'community/index.html': {size: 91034, hash: '698adb95fd64e2eb42f308c59bc5db064598e81efd46e4dbcec72cf9e0c850d7', text: () => import('./assets-chunks/community_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 77860, hash: '67809bf6d65c39aedf0f75909648dc95a2e6954c27c2a26e95f0497f3110dae7', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-AJLAW2YY.css': {size: 59988, hash: '1QrxJODRiu8', text: () => import('./assets-chunks/styles-AJLAW2YY_css.mjs').then(m => m.default)}
  },
};
