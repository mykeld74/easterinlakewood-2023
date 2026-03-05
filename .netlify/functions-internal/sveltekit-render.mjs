import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.B2uirg-b.js",app:"_app/immutable/entry/app.C7-hMBFR.js",imports:["_app/immutable/entry/start.B2uirg-b.js","_app/immutable/chunks/BenO7-ox.js","_app/immutable/chunks/DkTzywmj.js","_app/immutable/chunks/D1xFt-CM.js","_app/immutable/entry/app.C7-hMBFR.js","_app/immutable/chunks/CK2fK9jM.js","_app/immutable/chunks/DkTzywmj.js","_app/immutable/chunks/B4yUvEcd.js","_app/immutable/chunks/762wwxYY.js","_app/immutable/chunks/D1xFt-CM.js","_app/immutable/chunks/BSAtbo1q.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
