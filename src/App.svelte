<script>
	import {Router, Route} from 'svelte-routing';
	import CategoryPage from './pages/CategoryPage.svelte';
	import ErrorPage from './pages/ErrorPage.svelte';
	import Home from './pages/HomePage.svelte';
</script>

<Router>
	<Route path="/"><Home /></Route>
	<Route path="/a" ><CategoryPage /></Route>
	<Route path="/error" ><ErrorPage /></Route>
</Router>

<style></style>