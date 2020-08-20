<template>
  <div id="home-container" class="text-center">
    <div class="subscriptions-list">
      <div class="subs-item text-left" v-for="(s, i) in subscriptions" :key="i.toString()">
        <div class="subs-item-marker text-center">
          <span :class="{'red': s.current_version !== s.latest_version, 'green': s.current_version === s.latest_version}"></span>
        </div>
        <div class="subs-item-content">
          <div class="heading">{{ s.app_name }}</div>
          <div class="hint row-group"><span class="label">Current Version</span><span class="value">{{ s.current_version }}</span></div>
          <div class="hint row-group"><span class="label">Latest Version</span><span class="value">{{ s.latest_version }}</span></div>
        </div>
      </div>
    </div>
    <br>
    <div v-if="scanning" class="heading hint">Scanning</div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data: () => {
      return {
        scanning: true,
        subscriptions: [],
      }
    },
    mounted() {
      this.scan()
    },
    methods: {
      scan() {
        let self = this
        let socket = new WebSocket('ws://localhost:1445/')

        socket.onmessage = event => {
          self.subscriptions = JSON.parse(event.data)
          self.scanning = false
        }

        socket.onerror = event => {
          // ignore
          self.scanning = false
        }
      }
    }
  }
</script>

<style scoped>
  #home-container {
    padding: var(--padding)
  }

  .subscriptions-list {
    background-color: var(--color-transparent);
    padding: calc(var(--padding) * 2)
  }

  .subs-item {
    border-bottom: 1px solid var(--color-primary);
    padding: var(--padding);
    display: flex;
    align-items: center
  }

  .subs-item:last-child {
    border-bottom: none
  }

  .subs-item-marker {
    flex: 1
  }

  .subs-item-marker span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: var(--color-accent)
  }

  .subs-item-marker span.red {
    background-color: var(--color-danger)
  }

  .subs-item-marker span.green {
    background-color: var(--color-success)
  }

  .subs-item-content {
    flex: 9
  }

  .subs-item-content .hint {
    font-size: 14px;
    display: flex;
    flex-direction: row;
    width: 200px
  }

  .subs-item-content .hint .label {
    flex: 3
  }

  .subs-item-content .hint .value {
    flex: 1
  }
</style>
