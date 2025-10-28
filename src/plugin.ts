import { App, createVNode, render } from 'vue'
import VueLoading from './VueLoading.vue'
import { setLoading, unsetLoading, setLoaderColor, getLoaderColor } from './loadingState'

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
    app.config.globalProperties.$setLoaderColor = setLoaderColor
    app.config.globalProperties.$getLoaderColor = getLoaderColor

    // optional: expose globally in window for convenience
    if (typeof window !== 'undefined') {
      ;(window as any).setLoading = setLoading
      ;(window as any).unsetLoading = unsetLoading
      ;(window as any).setLoaderColor = setLoaderColor
      ;(window as any).getLoaderColor = getLoaderColor
    }
  },
}
