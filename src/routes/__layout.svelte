<script>
  import "../styles/tailwind-output.css";
	import '../app.css';
</script>

<main>
	<slot />
</main>

<footer>
	<p>Visit <a href="http://chingu.io">Chingu</a> to see how you can transform what you've learned into experience! The experience employer's want.</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
