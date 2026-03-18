<script lang="ts">
	import Img from '$components/Image.svelte';
	import '$css/reset.css';
	import '$css/style.css';
	import { afterNavigate } from '$app/navigation';
	import { browser } from '$app/environment';

	const gaId = import.meta.env.VITE_GA_ID as string | undefined;
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	function trackPageView(url: URL) {
		if (!gaId) return;
		// `gtag` is created by the inline GA snippet in <svelte:head>.
		(window as any).gtag?.('config', gaId, {
			page_path: url.pathname + url.search + url.hash
		});
	}

	if (browser && gaId) {
		// `afterNavigate` runs on initial mount too, so skip the first call
		// (the inline snippet already sends the initial page_view).
		let didFirst = false;
		afterNavigate(({ to }) => {
			if (!didFirst) {
				didFirst = true;
				return;
			}
			if (to?.url) trackPageView(to.url);
		});
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Federo&display=swap"
		rel="stylesheet"
	/>

	{#if gaId}
		<script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				window.dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', '{gaId}', {
				page_path: window.location.pathname + window.location.search + window.location.hash
			});
		</script>
	{/if}
</svelte:head>

<nav>
	<ul>
		<li><a href="#EasterSunday">Easter Sunday</a></li>
		<li><a href="#EasterEggHunt">Easter Egg Hunt</a></li>
		<li><a href="#GoodFriday">Good Friday</a></li>
		<li><a href="#Directions">Directions</a></li>
	</ul>
</nav>
{@render children?.()}
<footer>
	<div class="imgContainer">
		<a href="https://westwoodscc.org" target="_blank" rel="noopener noreferrer"
			><Img source="wwccLogo" altTag="Westwoods Community Church Logo" /></a
		>
	</div>
</footer>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: transparent;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		z-index: 1;
		padding-right: 10px;
	}
	ul {
		display: flex;
		width: 100%;
		justify-content: flex-end;
		font-family: 'Roboto', sans-serif;
	}
	li {
		list-style-type: none;
		margin-left: clamp(5px, 1.5vw, 10px);
		border-left: 1px solid #fff;
		padding-left: clamp(5px, 1.5vw, 10px);
		font-size: clamp(12px, 2vw, 16px);
		text-shadow: 1px 1px 3px #333;
	}

	li:first-child {
		border-left: none;
	}

	li a {
		text-decoration: none;
		color: #fff;
	}

	li a:hover {
		text-decoration: underline;
	}

	footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: transparent;
		display: flex;
		justify-content: flex-end;
	}

	footer .imgContainer {
		width: 150px;
		margin: 0 20px 20px 0;
	}

	@media (max-width: 450px) {
		footer {
			display: none;
		}
	}
</style>
