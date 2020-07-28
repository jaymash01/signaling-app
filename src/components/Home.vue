<template>
  <div id="home-container" class="text-center">
    <div class="image-circle">
      <img src="/images/search.png">
    </div>
    <br><br><br>
    <div class="subscriptions-list">
      <div class="subs-item text-left" v-for="(s, i) in subscriptions" :key="i.toString()">
        <div class="subs-item-marker text-center">
          <span :class="{'red': s.outdated && hasScanned, 'green': ! s.outdated && hasScanned}"></span>
        </div>
        <div class="subs-item-content">
          <div class="heading">{{ s.appName }}</div>
          <div class="hint">{{ s.currentVersion }}</div>
        </div>
      </div>
    </div>
    <br><br>
    <button class="btn" type="button" @click="scan">Scan for Updates</button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data: () => {
      return {
        hasScanned: false,
        subscriptions: [
          {
            appName: 'Node.js',
            currentVersion: '12.18.3',
            versionCommand: 'node -v',
            releasesRepo: 'https://nodejs.org/dist/latest',
            outdated: true,
          },
          {
            appName: 'Python',
            currentVersion: '3.7.4',
            versionCommand: 'python --version',
            releasesRepo: 'https://nodejs.org/dist/latest',
            outdated: true,
          },
          {
            appName: 'Node.js',
            currentVersion: '12.18.3',
            versionCommand: 'node -v',
            releasesRepo: 'https://nodejs.org/dist/latest',
            outdated: true,
          }
        ]
      }
    },
    methods: {
      scan() {
        let self = this, i = 0

        self.hasScanned = false

        for (; i < self.subscriptions.length; i++) {
          self.subscriptions[i].outdated = Math.random() > 0.5 ? true : false
        }

        self.hasScanned = true
      }
    }
  }
</script>

<style scoped>
  #home-container {
    padding-top: calc(var(--padding) * 5);
  }

  .subscriptions-list {
    background-color: var(--color-transparent);
    border-radius: 2px;
    padding: calc(var(--padding) * 2);
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
    flex: 5
  }
</style>
