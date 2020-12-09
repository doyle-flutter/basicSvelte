<script>
	import {Router, Route} from 'svelte-routing';
	import CategoryPage from './pages/CategoryPage.svelte';
	import ErrorPage from './pages/ErrorPage.svelte';
	import Home from './pages/HomePage.svelte';
	import {count} from './state/count';

	let stateCount;
	count.subscribe(v => stateCount = v);
	setInterval(() => count.update(n => n += 1), 3000);
</script>

<Router>
	<Route path="/" ><Home {stateCount}/></Route>
	<Route path="/a" ><CategoryPage /></Route>
	<Route path="/error" ><ErrorPage /></Route>
</Router>

<style></style>