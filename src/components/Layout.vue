<template>
  <div id="global-container">
    <header class="header top">
      <div class="hint text-left">v1.0</div>
    </header>
    <aside>
      <div class="header heading">SignalingApp</div>
      <ul id="side-nav">
        <li><router-link to="/" :class="{'active': $route.path === '/'}">Scan</router-link></li>
        <li><router-link to="/subscriptions" :class="{'active': $route.path === '/subscriptions'}">Subscriptions</router-link></li>
      </ul>
    </aside>
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Layout',
  }
</script>

<style scoped>
  #global-container {
    background-color: var(--color-primary-dark);
    position: absolute;
    min-height: 100%;
    width: 100%
  }

  .header {
    text-align: center;
    padding: var(--padding);
    border-bottom: 1px solid var(--color-primary)
  }

  .header.top {
    padding: 0 var(--padding);
    position: fixed;
    width: 100%;
    height: var(--header-height);
    line-height: var(--header-height);
    z-index: 999;
  }

  aside {
    position: fixed;
    top: var(--header-height);
    width: 25%;
    border-right: 1px solid var(--color-primary);
    min-height: 100vh;
  }

  main {
    position: absolute;
    top: var(--header-height);
    left: 25%;
    width: 75%;
    padding: var(--padding);
    background-color: var(--color-primary);
    min-height: calc(100% - var(--header-height));
  }

  #side-nav {
    list-style: none;
    padding: var(--padding)
  }

  #side-nav a {
    display: block;
    padding: var(--padding);
    border-bottom: 1px solid var(--color-primary)
  }

  #side-nav a.active {
    color: var(--color-accent)
  }
</style>
