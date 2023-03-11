<script>
	import Block from '$components/block.svelte';
	import Img from '$components/Image.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	let blockClass = 'easterSunday';
	let id = 'EasterSunday';

	onMount(() => {
		const width = window.innerWidth;
		if (width >= 768) {
			const tl = gsap.timeline();
			tl.from('.skull', { opacity: 0, duration: 1, x: 0, scale: 0.0, ease: 'ease-in-out' }).from(
				'.bfaContainer .bfaText img',
				{ opacity: 0, duration: 0.75, stagger: 0.25, scale: 0.2, ease: 'ease-in-out' }
			);
		}
	});
</script>

<Block {blockClass} {id}>
	<div class="contentContainer">
		<h1>Easter Sunday, You are invited!</h1>
		<div class="bfaContainer">
			<div class="imgContainer skull">
				<Img source="EasterCE" altTag="Easter Sunday" />
			</div>
		</div>
		<div class="timeContainer">
			<p class="desc">
				Easter is not just a celebration of spring, it is more than an excuse to search for eggs and
				eat candy, more than a remembrance of an historical event, even more than a religious
				celebration
			</p>
			<p class="desc"><strong>Easter Changes Everything!</strong></p>
			<p class="desc">Sunday: April 9th, 10:00am</p>
			<p class="desc">Lakewood Park: 150 S. Kipling St, Lakewood CO</p>
		</div>
	</div>
</Block>

<style lang="scss">
	@keyframes slideIn {
		0% {
			transform: translateX(-600px) scale(0.5);
			opacity: 0;
		}

		100% {
			transform: translateX(0%) scale(1);
			opacity: 1;
		}
	}
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
	h1 {
		font-size: clamp(46px, 8vw, 60px);
		text-align: center;
	}

	.bfaContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 100%;
		margin: 0;
		padding: 0;
		gap: 5vw;

		@media (max-width: 620px) {
			flex-direction: column;
			gap: 30px;
		}
	}
	.imgContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		width: clamp(300px, 80vw, 1200px);
		margin: 0;
	}
	.bfaText {
		width: clamp(300px, 45vw, 600px);
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: flex-start;
	}
</style>
