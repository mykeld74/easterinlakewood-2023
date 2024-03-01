<script>
	import Block from '$components/block.svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);

	let blockClass = 'eeh-block';
	let id = 'EasterEggHunt';

	onMount(() => {
		const width = window.innerWidth;
		if (width >= 768) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: '.eeh',
					start: 'top bottom',
					end: 'top 200',
					scrub: true
				}
			});
			tl.from('.eeh p', {
				opacity: 0,
				duration: 0.75,
				y: 1000,
				stagger: 0.25,
				ease: 'ease-in-out'
			}).from('#eehDesc', { opacity: 0, duration: 0.75, ease: 'ease-in-out' });
		}
	});
</script>

<Block {blockClass} {id}>
	<div class="contentContainer eehContainer">
		<p class="hopOver">Hop on over for our</p>
		<div class="joinUs">
			<p class="join">Join us on</p>
			<p class="date">March 30th <br /> 10-noon</p>
		</div>
		<div class="eeh">
			<p class="easter">Easter<br />Egg Hunt</p>
		</div>
		<div class="eehDesc">
			<p class="join">For some egg-citing fun! Obstacle course, food, games, maze & more!!</p>
			<p class="allAges">Event for all ages!</p>
		</div>
	</div>
</Block>

<style lang="scss">
	.contentContainer {
		overflow: hidden;
	}
	.eehContainer {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		grid-template-areas: 'title title title' 'joinUs eeh eehDesc';
		margin: 0;
		gap: 20px;
		@media (max-width: 1900px) {
			grid-template-columns: 1fr;
			grid-template-areas: 'title' 'eeh' 'joinUs' 'eehDesc';
		}
	}
	.eeh {
		grid-area: eeh;
	}
	.hopOver {
		font-size: clamp(34px, 6vw, 60px);
		margin: 0;
		text-align: center;
		grid-area: title;
	}

	.join {
		font-size: clamp(26px, 4vw, 40px);
		text-align: center;
		margin: 0;
	}
	.easter,
	.date,
	.allAges {
		font-size: clamp(110px, 16vw, 200px);
		font-family: 'Laries', serif;
		text-shadow: none;
		color: transparent;
		text-align: center;
		line-height: 1;
		background-image: linear-gradient(to top, #e79982, #c48165);
		background-clip: text;
		-webkit-background-clip: text;
		padding-top: 50px;
		margin: 0;
	}
	.date,
	.allAges {
		font-size: clamp(30px, 6vw, 50px);
		margin: 0;
	}
	.joinUs {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		grid-area: joinUs;
	}
	.eehDesc {
		grid-area: eehDesc;
		color: #333;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
