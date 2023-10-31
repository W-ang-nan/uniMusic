"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/home/home.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/myproject/unimusic/unimusic/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  const store = common_vendor.createPinia();
  store.use(common_vendor.createUnistorage());
  app.use(common_vendor.uviewPlus);
  app.use(store);
  common_vendor.index.$u.config.unit = "rpx";
  return {
    app,
    pinia: common_vendor.pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
