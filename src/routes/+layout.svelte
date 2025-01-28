<script>
	/** @type {import("@prismicio/client").Content.NavDocument} */
	export let data;
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { repositoryName } from '$lib/prismicio';
	import Navbar from '$lib/slices/Navbar/index.svelte';
	console.log(data.navigation.data.slices);
	const navbarSlice = data.navigation.data.slices.find(slice => slice.slice_type === 'navbar');
</script>

<div class="text-slate-800">
	<Navbar slice={navbarSlice} />
	<main><slot /></main>
</div>
<PrismicPreview {repositoryName} />

