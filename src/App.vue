<template>
  <div id="app">
    <component :is="$root.layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  import Layout from './components/Layout.vue'

  export default {
    name: 'App',
    components: {
      Layout,
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap&family=Quicksand:wght@500');

  :root {
    --header-height: 40px;
    --padding: 10px;
    --text-color: #f5f5f5;
    --color-primary: #2a4865;
    --color-primary-dark: #051e34;
    --color-hint: #bbb;
    --color-accent: #4682b4;
    --color-transparent: rgba(255, 255, 255, 0.1);
    --color-danger: #ff0000;
    --color-success: #42c662
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box !important;
    outline: none;
    border: none
  }

  a, a:visited {
    text-decoration: none;
    color: var(--text-color)
  }

  a:hover, a:active {
    color: var(--color-accent)
  }

  .btn {
    display: inline-block;
    padding: var(--padding) calc(var(--padding) * 2);
    background-color: var(--color-primary-dark);
    font-family: 'Quicksand', sans-serif;
    color: var(--text-color);
    font-size: 16px;
    cursor: pointer
  }

  #app {
    font-family: 'PT Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color)
  }

  .heading {
    font-family: 'Quicksand', sans-serif;
    margin: calc(var(--padding) / 2) 0
  }

  .heading.bordered {
    margin: 0;
    padding: var(--padding) calc(var(--padding) / 2);
    border-bottom: 1px solid var(--color-primary-dark)
  }

  .text-left {
    text-align: left
  }

  .text-center {
    text-align: center
  }

  .hint {
    color: var(--color-hint);
    font-size: 13px
  }

  .image-circle {
    background-color: var(--color-transparent);
    border-radius: 60px;
    display: inline-block;
    width: 120px;
    height: 120px;
    position: relative
  }

  .image-circle img {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    left: 50%;
    margin-left: -20px
  }
</style>
