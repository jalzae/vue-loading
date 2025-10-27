<template>
  <div class="container">
    <h1>Jalz Loading Component</h1>
    <p>Interactive Testing Example</p>

    <div class="demo-section">
      <h2>Basic Controls</h2>
      <div class="button-group">
        <button @click="handleShowLoading" class="btn btn-primary">
          Show Loading
        </button>
        <button @click="handleHideLoading" class="btn btn-secondary">
          Hide Loading
        </button>
      </div>
    </div>

    <div class="demo-section">
      <h2>Simulated Operations</h2>
      <div class="button-group">
        <button @click="handleSimulatedRequest" class="btn btn-primary">
          Simulate API Request (3s)
        </button>
        <button @click="handleLongOperation" class="btn btn-primary">
          Long Operation (5s)
        </button>
      </div>
      <p v-if="operationResult" class="result-message">
        ✅ {{ operationResult }}
      </p>
    </div>

    <div class="demo-section">
      <h2>Usage Examples</h2>
      <pre class="code-block"><code>// Method 1: Via imported functions
import &#123; setLoading, unsetLoading &#125; from 'jalz-loading'

setLoading()    // Show overlay
unsetLoading()  // Hide overlay

// Method 2: Via global properties
this.$setLoading()
this.$unsetLoading()

// Method 3: Via window (for non-Vue code)
window.setLoading()
window.unsetLoading()</code></pre>
    </div>

    <div class="demo-section">
      <h2>Installation</h2>
      <pre class="code-block"><code>// main.ts
import &#123; createApp &#125; from 'vue'
import App from './App.vue'
import JalzLoading from 'jalz-loading'

const app = createApp(App)
app.use(JalzLoading)
app.mount('#app')</code></pre>
    </div>

    <div class="demo-section">
      <h2>Features</h2>
      <ul>
        <li>✅ Global loading overlay component</li>
        <li>✅ Customizable spinner animation</li>
        <li>✅ Fullscreen overlay with backdrop</li>
        <li>✅ Accessible (ARIA labels)</li>
        <li>✅ Smooth fade transitions</li>
        <li>✅ Multiple ways to control (composable, properties, window)</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { setLoading, unsetLoading } from '../src/loadingState'

const operationResult = ref('')

const handleShowLoading = () => {
  setLoading()
}

const handleHideLoading = () => {
  unsetLoading()
}

const handleSimulatedRequest = async () => {
  operationResult.value = ''
  setLoading()

  // Simulate API request
  await new Promise(resolve => setTimeout(resolve, 3000))

  unsetLoading()
  operationResult.value = 'API request completed!'
}

const handleLongOperation = async () => {
  operationResult.value = ''
  setLoading()

  // Simulate long operation
  await new Promise(resolve => setTimeout(resolve, 5000))

  unsetLoading()
  operationResult.value = 'Long operation completed!'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
  text-align: center;
}

> p {
  text-align: center;
  color: #7f8c8d;
  margin-bottom: 40px;
  font-size: 1.1rem;
}

.demo-section {
  background: white;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
  border-bottom: 3px solid #ad5160;
  padding-bottom: 10px;
}

.button-group {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #ad5160 0%, #8b3e50 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(173, 81, 96, 0.3);
}

.btn-secondary {
  background: #ecf0f1;
  color: #2c3e50;
}

.btn-secondary:hover {
  background: #bdc3c7;
}

.result-message {
  margin-top: 20px;
  padding: 15px;
  background: #d4edda;
  color: #155724;
  border-radius: 8px;
  border-left: 4px solid #28a745;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.code-block {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
}

code {
  display: block;
}

ul {
  list-style: none;
}

ul li {
  padding: 10px 0;
  font-size: 1.05rem;
  color: #34495e;
}

ul li:before {
  content: '✨ ';
  margin-right: 10px;
  color: #ad5160;
  font-weight: bold;
}
</style>
