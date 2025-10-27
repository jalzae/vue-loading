import { ref } from 'vue'

export const loadingVisible = ref(false)

export function setLoading(value = true) {
  loadingVisible.value = value
}

export function unsetLoading() {
  loadingVisible.value = false
}
