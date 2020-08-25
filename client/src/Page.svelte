<script>
    import page from 'page';
  
    import Home from './pages/Home.svelte';
    import About from './pages/About.svelte';
    import Profile from './pages/Profile.svelte';
  
    // set default component
    let current = Home;
  
    // Map routes to page. If a route is hit the current
    // reference is set to the route's component
    page('/', () => (current = Home));
    page('/about', () => (current = About));
    page('/profile', () => (current = Profile));
    // activate router
    page.start();
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
      <a href="/">home</a>
      <a href="/about">about</a>
      <a href="/profile">profile</a>
    </nav>
  
    <svelte:component this={current} />
  </main>