# Jalz Loading - Vue 3 Global Loading Overlay

A lightweight, beautiful, and customizable global loading overlay component for Vue 3 and Nuxt 3. Includes TypeScript support and multiple ways to control the loading state.

[![npm version](https://img.shields.io/npm/v/@jalzae/vue-loading.svg)](https://www.npmjs.com/package/@jalzae/vue-loading)
[![License](https://img.shields.io/npm/l/@jalzae/vue-loading.svg)](https://github.com/jalzae/vue-loading/blob/master/LICENSE)

## Features

✨ **Global Loading Overlay** - Fullscreen, centered spinner overlay
🎨 **Beautiful Animations** - Smooth fade transitions with animated dots
📱 **Fully Responsive** - Works on all screen sizes
🔧 **Easy to Use** - Simple API with multiple control methods
📘 **TypeScript Support** - Full type safety and IDE autocompletion
🚀 **Nuxt 3 Compatible** - Works seamlessly with Nuxt 3
♿ **Accessible** - ARIA labels and semantic HTML
💨 **Lightweight** - Minimal bundle size

## Installation

### NPM

```bash
npm install @jalzae/vue-loading
```

### Yarn

```bash
yarn add @jalzae/vue-loading
```

### PNPM

```bash
pnpm add @jalzae/vue-loading
```

## Quick Start

### Vue 3

#### 1. Register the Plugin

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import JalzLoading from '@jalzae/vue-loading'

const app = createApp(App)

// Install the plugin
app.use(JalzLoading)

app.mount('#app')
```

#### 2. Use in Your Components

```vue
<template>
  <button @click="showLoading">Show Loading</button>
</template>

<script setup lang="ts">
import { setLoading, unsetLoading } from '@jalzae/vue-loading'

const showLoading = () => {
  setLoading()
  // do something
  setTimeout(() => unsetLoading(), 3000)
}
</script>
```

### Nuxt 3

#### 1. Create a Plugin

```typescript
// plugins/jalz-loading.ts
import JalzLoading from '@jalzae/vue-loading'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(JalzLoading)
})
```

#### 2. Use in Your Composables/Components

```typescript
// composables/useApi.ts
import { setLoading, unsetLoading } from '@jalzae/vue-loading'

export const useApi = () => {
  const fetchData = async () => {
    setLoading()
    try {
      // your API call
      const data = await $fetch('/api/data')
      return data
    } finally {
      unsetLoading()
    }
  }

  return { fetchData }
}
```

## Usage

### Method 1: Composition API (Recommended)

```typescript
import { setLoading, unsetLoading } from '@jalzae/vue-loading'

// Show loading
setLoading()

// Hide loading
unsetLoading()

// Or with async operations
const loadData = async () => {
  setLoading()
  try {
    const data = await fetchData()
    return data
  } finally {
    unsetLoading()
  }
}
```

### Method 2: Global Properties

```typescript
// In Options API or any component
export default {
  methods: {
    async fetchData() {
      this.$setLoading()
      try {
        const data = await this.api.getData()
        this.data = data
      } finally {
        this.$unsetLoading()
      }
    }
  }
}
```

### Method 3: Window Global (Non-Vue Code)

```typescript
// In any JavaScript code, outside Vue
window.setLoading()
// do something
window.unsetLoading()
```

## API Reference

### Functions

#### `setLoading(value?: boolean)`

Shows the loading overlay. Optionally set a specific value.

```typescript
import { setLoading } from '@jalzae/vue-loading'

setLoading()     // Show loading
setLoading(true) // Show loading (explicit)
```

#### `unsetLoading()`

Hides the loading overlay.

```typescript
import { unsetLoading } from '@jalzae/vue-loading'

unsetLoading()
```

#### `loadingVisible`

Reactive ref for the loading state. Use if you need to observe the loading state.

```typescript
import { loadingVisible } from '@jalzae/vue-loading'
import { watch } from 'vue'

watch(loadingVisible, (isLoading) => {
  console.log('Loading:', isLoading)
})
```

### Global Properties (Vue)

When the plugin is installed, these are available via `app.config.globalProperties`:

- `$setLoading` - Show loading overlay
- `$unsetLoading` - Hide loading overlay

## Examples

### API Request with Loading

```vue
<template>
  <div>
    <button @click="fetchUsers">Load Users</button>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { setLoading, unsetLoading } from '@jalzae/vue-loading'

const users = ref([])

const fetchUsers = async () => {
  setLoading()
  try {
    const response = await fetch('/api/users')
    users.value = await response.json()
  } catch (error) {
    console.error('Failed to fetch users:', error)
  } finally {
    unsetLoading()
  }
}
</script>
```

### Form Submission

```vue
<template>
  <form @submit.prevent="submitForm">
    <input v-model="name" type="text" placeholder="Name" />
    <input v-model="email" type="email" placeholder="Email" />
    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { setLoading, unsetLoading } from '@jalzae/vue-loading'

const name = ref('')
const email = ref('')

const submitForm = async () => {
  setLoading()
  try {
    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.value, email: email.value })
    })
    alert('Form submitted!')
  } finally {
    unsetLoading()
  }
}
</script>
```

### Simulate Long Operation

```typescript
const runLongOperation = async () => {
  setLoading()

  // Simulate 5 seconds of work
  await new Promise(resolve => setTimeout(resolve, 5000))

  unsetLoading()
  console.log('Operation complete!')
}
```

## Styling Customization

The loading overlay has the following CSS structure:

```css
/* Fullscreen overlay */
.vue-loading-overlay {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.7);
  z-index: 9999;
}

/* Spinner container */
.vue-loading {
  width: 80px;
  height: 80px;
}

/* Individual dots */
.vue-loading__dot {
  background-color: #ad5160;
  animation: vue-loading-fade 2s linear infinite;
}
```

To customize colors, you can override these styles in your global CSS:

```css
/* your-global-styles.css */
.vue-loading__dot {
  background-color: #your-color !important;
}

.vue-loading-overlay {
  background: rgba(0, 0, 0, 0.5) !important;
}
```

## TypeScript Support

Full TypeScript support with proper type definitions:

```typescript
import { setLoading, unsetLoading, loadingVisible } from '@jalzae/vue-loading'
import type { Ref } from 'vue'

// All functions are properly typed
setLoading() // void
unsetLoading() // void
const visible: Ref<boolean> = loadingVisible
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Bundle Size**: ~2KB minified + gzipped
- **Runtime**: No performance impact, uses Vue's efficient reactivity system
- **Memory**: Minimal memory footprint

## License

MIT License - feel free to use in your projects!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

Made with ❤️ by Jalzae
