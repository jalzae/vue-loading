import { ref as L, defineComponent as p, createBlock as w, openBlock as a, Transition as y, withCtx as C, createElementBlock as u, createCommentVNode as b, unref as g, normalizeStyle as r, createElementVNode as l, Fragment as k, renderList as V, createVNode as $, render as h } from "vue";
const i = L(!1), d = L("#ad5160");
function f(e = !0) {
  i.value = e;
}
function _() {
  i.value = !1;
}
function v(e) {
  d.value = e;
}
function m() {
  return d.value;
}
const x = { class: "vue-loading" }, P = /* @__PURE__ */ p({
  __name: "VueLoading",
  setup(e) {
    const o = i, n = d;
    return (s, c) => (a(), w(y, { name: "fade" }, {
      default: C(() => [
        g(o) ? (a(), u("div", {
          key: 0,
          class: "vue-loading-overlay",
          role: "status",
          "aria-label": "Loading",
          style: r({ "--loader-color": g(n) })
        }, [
          l("div", x, [
            (a(), u(k, null, V(8, (t) => l("div", {
              key: t,
              class: "vue-loading__line",
              style: r({ transform: `rotate(${(t - 1) * 45}deg)` })
            }, [
              l("div", {
                class: "vue-loading__dot",
                style: r({ animationDelay: `${(t - 1) * 0.1}s` })
              }, null, 4)
            ], 4)), 64))
          ])
        ], 4)) : b("", !0)
      ]),
      _: 1
    }));
  }
}), B = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [s, c] of o)
    n[s] = c;
  return n;
}, E = /* @__PURE__ */ B(P, [["__scopeId", "data-v-0a81495d"]]), z = {
  install(e) {
    const o = document.createElement("div");
    document.body.appendChild(o);
    const n = $(E);
    h(n, o), e.config.globalProperties.$setLoading = f, e.config.globalProperties.$unsetLoading = _, e.config.globalProperties.$setLoaderColor = v, e.config.globalProperties.$getLoaderColor = m, typeof window < "u" && (window.setLoading = f, window.unsetLoading = _, window.setLoaderColor = v, window.getLoaderColor = m);
  }
};
export {
  E as VueLoading,
  z as default,
  m as getLoaderColor,
  d as loaderColor,
  i as loadingVisible,
  v as setLoaderColor,
  f as setLoading,
  _ as unsetLoading
};
