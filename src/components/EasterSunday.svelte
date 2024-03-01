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
		<h1>
			Join us as we celebrate the resurrection of Jesus. We will have something engaging and
			encouraging for all ages.
		</h1>

		<div class="easterContainer"><p class="easterText">Easter</p></div>

		<div class="timeContainer">
			<p class="desc">Sunday: March 31st, 9:00am & 10:30am</p>
			<p class="desc">7700 W. Woodard Drive</p>
		</div>
	</div>
</Block>

<style lang="scss">
	h1 {
		font-size: clamp(30px, 5vw, 50px);
		text-align: center;
		align-self: center;
		max-width: 960px;
		margin: 0 auto;
	}
	.easterContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: 0 auto;
	}
	.easterText {
		font-size: clamp(80px, 36vw, 520px);
		text-align: center;
		font-weight: 500;
		font-family: 'Cormorant Garamond', serif;
		line-height: 1;
		margin: 0;
		text-shadow: none;
		align-self: center;
	}

	.timeContainer {
		align-self: self-end;
		.desc {
			max-width: 100%;
		}
		p {
			font-size: clamp(30px, 5vw, 50px);
		}
	}

	.imgContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		width: clamp(300px, 80vw, 1200px);
		margin: 0;
	}
</style>
