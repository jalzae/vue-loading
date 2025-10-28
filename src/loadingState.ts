import { ref } from 'vue'

export const loadingVisible = ref(false)
export const loaderColor = ref('#ad5160') // Default color (current burgundy/rose)

export function setLoading(value = true) {
  loadingVisible.value = value
}

export function unsetLoading() {
  loadingVisible.value = false
}

export function setLoaderColor(color: string) {
  loaderColor.value = color
}

export function getLoaderColor(): string {
  return loaderColor.value
}
