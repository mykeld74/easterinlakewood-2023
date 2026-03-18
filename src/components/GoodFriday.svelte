<script lang="ts">
	import Block from '$components/block.svelte';
	import { onMount } from 'svelte';

	const blockClass = 'GoodFriday';
	const id = 'GoodFriday';

	onMount(async () => {
		const { gsap } = await import('gsap');
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);

		const width = window.innerWidth;
		if (width >= 768) {
			const gftl = gsap.timeline({
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
		}
	});
</script>

<Block {blockClass} {id}>
	<div class="GFcontainer" id="GFContainer">
		<div class="textContainer">
			<p class="desc gfDesc">Join us for self guided experience.</p>
		</div>
		<div class="headlineContainer">
			<h1 class="gfTitle">Good Friday</h1>
		</div>

		<div class="descContainer">
			<p class="desc">At Westwoods Community Church - 7700 W. Woodard Dr.</p>
			<p class="desc">Friday: April 3rd</p>
			<p class="desc">Doors will be open from 12-7pm</p>
		</div>
	</div>
</Block>

<style>
	.headlineContainer {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.headlineContainer h1 {
		text-align: center;
		font-family: 'Federo', sans-serif;
		font-size: clamp(36px, 20vw, 180px);
		margin: 0;
	}
	.GFcontainer {
		display: flex;

		flex-direction: column;
		justify-content: space-between;
		min-height: 90vh;
		color: #fff;
		text-shadow: 2px 2px 3px #000;
	}

</style>
