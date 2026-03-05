<script>
	import Block from '$components/block.svelte';

	let blockClass = 'easterSunday';
	let id = 'EasterSunday';
</script>

<Block {blockClass} {id}>
	<div class="contentContainer">
		<p class="desc">
			Let’s be honest.A lot of people only go to church on Easter. And a lot of people stopped going
			altogether. If that’s you — you’re invited. No pressure.No perfect people.Just real
			conversations about real life. If you don’t already have plans, we would love for you
		</p>

		<div class="easterContainer"><p class="easterText">Easter</p></div>

		<div class="timeContainer">
			<h1 class="desc">Easter & Me</h1>
			<p class="desc">Sunday: April 5th, 9:00am & 10:30am</p>
			<p class="desc">
				Because the great news of Easter is too big to be contained in a single Sunday, we will be
				doing 3 weeks of Easter celebrations.
			</p>
			<p class="desc">
				Please join us April 12th, 19th, and 26th for the remainder of the series. At 9:00 or 10:30.
			</p>
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
		font-family: 'Federo', sans-serif;
		line-height: 1;
		margin: 0;
		text-shadow: none;
		align-self: center;
	}

	.timeContainer {
		align-self: self-end;
		max-width: 1200px;
		margin: 0 auto;
		.desc {
			max-width: 100%;
		}
		p {
			font-size: clamp(22px, 4vw, 40px);
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
