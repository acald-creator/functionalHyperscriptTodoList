// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/80060c94ef549c077a011977c2b5461bd0fd8947/hyperscript/index.d.ts
declare module 'hyperscript' {

	interface HyperScript {
		/** Creates an HTML element */
		(tagName: string, ...args: any[]): HTMLElement;
		/** Cleans up any event handlers created by this hyperscript context */
		cleanup(): void;
		/** Creates a new hyperscript context */
		context(): HyperScript;
	}

	const h: HyperScript;
	export = h;
}