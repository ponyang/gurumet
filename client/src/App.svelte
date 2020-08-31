<script>
  import { Router, Route, NotFound } from './pager'

  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Profile from './pages/Profile.svelte';
</script>
  
  <style>
    main {
      text-align: center;
      padding: 1em;
      max-width: 240px;
      margin: 0 auto;
    }
  
    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 4em;
      font-weight: 100;
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
      <a href="/">home11</a>
      <a href="/about">about22</a>
      <a href="/profile">profile33</a>
      <a href="/news">news44</a>
    </nav>
  
    <Router>
      <Route path="/" component="{Home}" />
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