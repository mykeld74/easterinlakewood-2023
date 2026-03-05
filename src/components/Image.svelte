<script lang="ts">
	
	interface Props {
		// import { image, initialize } from 'svelte-cloudinary';
		source: string;
		altTag: string;
	}

	let { source, altTag }: Props = $props();

	// initialize({ cloud_name: 'mykeld74' });

	const src = $derived(`https://res.cloudinary.com/mykeld74/image/upload/f_auto,q_auto/easterinlakewood/${source}`);
</script>

<!-- <img use:image={{ src, bind: true, lazy: true }} alt={altTag} class={source} /> -->

<img {src} alt={altTag} class={source} loading="lazy" />
