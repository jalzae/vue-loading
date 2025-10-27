import { App, createVNode, render } from 'vue'
import VueLoading from './VueLoading.vue'
import { setLoading, unsetLoading } from './loadingState'

export default {
  install(app: App) {
    // create container for loading overlay
    const container = document.createElement('div')
    document.body.appendChild(container)

    const vnode = createVNode(VueLoading)
    render(vnode, container)

    // expose globally via app properties
    app.config.globalProperties.$setLoading = setLoading
    app.config.globalProperties.$unsetLoading = unsetLoading

    // optional: expose globally in window for convenience
    if (typeof window !== 'undefined') {
      ;(window as any).setLoading = setLoading
      ;(window as any).unsetLoading = unsetLoading
    }
  },
}
