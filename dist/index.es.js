import { ref as _, defineComponent as g, createBlock as f, openBlock as a, Transition as m, withCtx as v, createElementBlock as d, createCommentVNode as p, unref as y, createElementVNode as i, Fragment as L, renderList as w, normalizeStyle as r, createVNode as b, render as k } from "vue";
const s = _(!1);
function c(e = !0) {
  s.value = e;
}
function u() {
  s.value = !1;
}
const V = {
  key: 0,
  class: "vue-loading-overlay",
  role: "status",
  "aria-label": "Loading"
}, h = { class: "vue-loading" }, x = /* @__PURE__ */ g({
  __name: "VueLoading",
  setup(e) {
    const n = s;
    return (t, l) => (a(), f(m, { name: "fade" }, {
      default: v(() => [
        y(n) ? (a(), d("div", V, [
          i("div", h, [
            (a(), d(L, null, w(8, (o) => i("div", {
              key: o,
              class: "vue-loading__line",
              style: r({ transform: `rotate(${(o - 1) * 45}deg)` })
            }, [
              i("div", {
                class: "vue-loading__dot",
                style: r({ animationDelay: `${(o - 1) * 0.1}s` })
              }, null, 4)
            ], 4)), 64))
          ])
        ])) : p("", !0)
      ]),
      _: 1
    }));
  }
}), C = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, o] of n)
    t[l] = o;
  return t;
}, $ = /* @__PURE__ */ C(x, [["__scopeId", "data-v-26624c27"]]), E = {
  install(e) {
    const n = document.createElement("div");
    document.body.appendChild(n);
    const t = b($);
    k(t, n), e.config.globalProperties.$setLoading = c, e.config.globalProperties.$unsetLoading = u, typeof window < "u" && (window.setLoading = c, window.unsetLoading = u);
  }
};
export {
  $ as VueLoading,
  E as default,
  s as loadingVisible,
  c as setLoading,
  u as unsetLoading
};
