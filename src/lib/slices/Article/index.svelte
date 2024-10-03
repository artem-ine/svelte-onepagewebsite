<script>
	/** @type {import("@prismicio/client").Content.ArticleSlice} */
	export let slice;
	import { PrismicImage } from "@prismicio/svelte";
	import { PrismicRichText } from "@prismicio/svelte";
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="article">
	<div class="image">
		<PrismicImage field={slice.primary.image}/>
	</div>
	<span class="title">{slice.primary.title}</span>
	<PrismicRichText field={slice.primary.content} class="text"/>
</section>


<style>
.article{
	display: flex;
	flex-direction: column;
}

.image{
	width: 80%;
}
</style>