<script lang="ts">
	import Block from '$components/block.svelte';
	import { onMount } from 'svelte';

	const blockClass = 'eeh-block';
	const id = 'EasterEggHunt';

	onMount(async () => {
		const { gsap } = await import('gsap');
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);

		const width = window.innerWidth;
		if (width >= 768) {
			const tl = gsap.timeline({
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
			}).from('.eehDesc', { opacity: 0, duration: 0.75, ease: 'ease-in-out' });
		}
	});
</script>

<Block {blockClass} {id}>
	<div class="contentContainer eehContainer">
		<p class="hopOver">Hop on over for our</p>
		<div class="joinUs">
			<p class="join">Join us on</p>
			<p class="date">April 4th <br /> 10-noon</p>
		</div>
		<div class="eeh">
			<p class="easter">Easter<br />Egg Hunt</p>
		</div>
		<div class="eehDesc">
			<p class="join">
				For some egg-citing fun for all ages! Obstacle course, food, games, maze & more!!
			</p>
		</div>
		<div class="huntSchedule">
			<h3 class="scheduleTitle">Hunt Schedule</h3>
			<div class="scheduleRounds">
				<div class="roundColumn">
					<h4 class="roundTitle">Round 1</h4>
					<p class="timeLine">0-3 years: 10:15 AM <span class="locationText">(Front Lawn)</span></p>
					<p class="timeLine">4-5 years: 10:25 AM <span class="locationText">(Front Lawn)</span></p>
					<p class="timeLine">
						6-8 years: 10:35 AM
						<span class="locationText">(Playground - lower/easy reach)</span>
					</p>
					<p class="timeLine">
						9-11 years: 10:45 AM <span class="locationText">(Playground)</span>
					</p>
				</div>
				<div class="roundColumn">
					<h4 class="roundTitle">Round 2</h4>
					<p class="timeLine">0-3 years: 11:15 AM <span class="locationText">(Front Lawn)</span></p>
					<p class="timeLine">4-5 years: 11:25 AM <span class="locationText">(Front Lawn)</span></p>
					<p class="timeLine">
						6-8 years: 11:35 AM
						<span class="locationText">(Playground - lower/easy reach)</span>
					</p>
					<p class="timeLine">
						9-11 years: 11:45 AM <span class="locationText">(Playground)</span>
					</p>
				</div>
			</div>
			<p class="finalCall">Final Call: 11:55 AM (last-minute guests, littles get a head start!)</p>
		</div>
	</div>
</Block>

<style>
	.contentContainer {
		overflow: hidden;
	}
	.eehContainer {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		grid-template-areas: 'title title title' 'joinUs eeh eehDesc' 'schedule schedule schedule';
		margin: 0;
		gap: 20px;
		position: relative;
		align-items: center;
	}

	@media (max-width: 1900px) {
		.eehContainer {
			grid-template-columns: 1fr;
			grid-template-areas: 'title' 'eeh' 'joinUs' 'eehDesc' 'schedule';
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
	.date {
		font-size: clamp(70px, 8vw, 200px);
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
	.huntSchedule {
		grid-area: schedule;
		width: min(760px, 100%);
		justify-self: center;
		margin-top: 18px;
		padding: 8px 6px 0;
	}
	.scheduleTitle {
		font-size: clamp(24px, 3.4vw, 30px);
		line-height: 1;
		color: #5c4087;
		margin: 0 0 12px;
		text-align: center;
		text-decoration: underline;
	}
	.scheduleRounds {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(12px, 2vw, 28px);
	}
	.roundColumn {
		padding: 0 6px;
	}
	.roundTitle {
		margin: 0 0 10px;
		font-size: clamp(24px, 3.4vw, 30px);

		line-height: 1;
		color: #5c4087;
		text-align: center;
	}
	.timeLine {
		margin: 0 0 8px;
		font-size: clamp(20px, 2.2vw, 28px);
		font-weight: 700;
		line-height: 1.25;
		text-align: center;
	}
	.locationText {
		display: block;
		font-size: clamp(17px, 1.8vw, 22px);
		font-weight: 500;
		opacity: 0.85;
	}
	.finalCall {
		margin: 16px 0 0;
		text-align: center;
		font-size: clamp(24px, 3.4vw, 30px);
		font-weight: 800;
		color: #5c4087;
		text-wrap: balance;
	}
	@media (max-width: 900px) {
		.scheduleRounds {
			grid-template-columns: 1fr;
		}
		.roundColumn {
			padding: 0;
		}
	}
</style>
