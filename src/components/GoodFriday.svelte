<script>
	import Block from '$components/block.svelte';
	import Img from '$components/Image.svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);
	let blockClass = 'GoodFriday';
	let id = 'GoodFriday';

	onMount(() => {
		const width = window.innerWidth;
		if (width >= 768) {
			let gftl = gsap.timeline({
				scrollTrigger: {
					trigger: '#GFContainer',
					start: 'top bottom',
					end: 'top 200',
					scrub: true
				}
			});
			gftl
				.from('.headlineContainer h1', {
					opacity: 0,
					duration: 0.75,
					stagger: 0.25,
					y: 1000,
					ease: 'ease-in-out'
				})
				.from('.gfDesc', { opacity: 0, duration: 0.75, ease: 'ease-in-out' });
			let gfImg = gsap.timeline({
				scrollTrigger: {
					trigger: '.gfDesc',
					start: 'top bottom',
					end: '+=700',
					scrub: true
				}
			});
			gfImg.from('.stationsContainer img', {
				opacity: 0,
				duration: 0.75,
				x: 1500,
				stagger: 0.25,
				y: 1000,
				ease: 'ease-in-out'
			});
		}
	});
</script>

<Block {blockClass} {id}>
	<div class="GFcontainer" id="GFContainer">
		<div class="textContainer">
			<p class="desc gfDesc">
				Join us for a Stations of the Cross self-directed experience and an evening Worship Service.
			</p>
		</div>
		<div class="headlineContainer">
			<h1 class="gfTitle">Good Friday</h1>
		</div>

		<div class="descContainer">
			<p class="desc">At Westwoods Community Church - 7700 W. Woodard Dr.</p>
			<p class="desc">Friday: April 18th</p>
			<p class="desc">Stations of the Cross: 12pm-6:30pm (come anytime)</p>
			<p class="desc">Worship Service: 7pm-7:45pm</p>
		</div>
	</div>
</Block>

<style lang="scss">
	.headlineContainer {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		h1 {
			text-align: center;
			font-family: 'Federo', sans-serif;
			font-size: clamp(36px, 20vw, 180px);

			margin: 0;
		}
	}
	.GFcontainer {
		display: flex;

		flex-direction: column;
		justify-content: space-between;
		min-height: 90vh;
		color: #fff;
		text-shadow: 2px 2px 3px #000;
	}
	.stationsContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90%;

		margin: 0 auto;
		padding: 0;
		gap: 5vw;

		@media (max-width: 620px) {
			flex-direction: column;
			gap: 30px;
		}
	}
</style>
