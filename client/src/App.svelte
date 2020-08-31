<script>
  import './theme/_smui-theme.scss';
  import { Router, Route, NotFound, } from './pager'

  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Profile from './pages/Profile.svelte';

  const data = { foo: 'bar', custom: true };
</script>
  
  <style>
  main {
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  nav a {
    padding-right: 3rem;
  }
  </style>
  
  <main>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/profile">Profile</a>
      <a href="/news">News</a>
    </nav>
  
    <Router>
      <Route path="/" component="{Home}" {data}/>
      <Route path="/about" component="{About}" />
      <Route path="/profile" component="{Profile}" />
      <Route path="/news">
        <h2>Latest News</h2>
        <p>Finally some good news!</p>
      </Route>
      <NotFound>
        <h2>Sorry. Page not found.</h2>
      </NotFound>
    </Router>
  </main>