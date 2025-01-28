// place files you want to import through the `$lib` alias in this folder.

import Article from './Article/index.svelte';
import CallToAction from './CallToAction/index.svelte';
import Hero from './Hero/index.svelte';
import Navbar from './Navbar/index.svelte';

export const components = {
	article: Article,
	call_to_action: CallToAction,
  hero: Hero,
  navbar: Navbar
};
