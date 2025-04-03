<script>
	import Img from '$components/Image.svelte';
	import '$css/reset.css';
	import '$css/style.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Federo&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<nav>
	<ul>
		<li><a href="#EasterSunday">Easter Sunday</a></li>
		<li><a href="#EasterEggHunt">Easter Egg Hunt</a></li>
		<li><a href="#GoodFriday">Good Friday</a></li>
		<li><a href="#Directions">Directions</a></li>
	</ul>
</nav>
<slot />
<footer>
	<div class="imgContainer">
		<a href="https://westwoodscc.org" target="_blank" rel="noopener noreferrer"
			><Img source="wwccLogo" altTag="Westwoods Community Church Logo" /></a
		>
	</div>
</footer>

<style lang="scss">
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

		&:first-child {
			border-left: none;
		}

		a {
			text-decoration: none;
			color: #fff;
			&:hover {
				text-decoration: underline;
			}
		}
	}
	footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: transparent;
		display: flex;
		justify-content: flex-end;
		@media (max-width: 450px) {
			display: none;
		}
		.imgContainer {
			width: 150px;
			margin: 0 20px 20px 0;
		}
	}
</style>
