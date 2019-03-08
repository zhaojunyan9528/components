// pages/index.js
const A = getApp();
Page(A.assignPage({
   data: {
      count: 1,
      menus: [{
            title: "modal 弹窗",
            page: "modal/index"
         },
         {
            title: "Tab 标签",
            page: "/pages/tabs/tab?a=1&b=fcs"
         },
         {
            title: "panel 面板",
            page: "/pages/panle/panle"
         },
         {
            title: "select 列表单选或多选",
            page: "/pages/select/index"
         },
         {
            title: "card 数据卡",
            page: "/pages/card/card"
         },
         {
            title: "search 搜索框",
            page: "6"
         },
         {
            title: "dropdown 下拉菜单",
            page: "/pages/dropdown/index"
         },
         {
            title: "buttn 按钮",
            page: "button/index"
         },
         {
            title: "countdown 定时器",
            page: "/packageA/pages/tabs"
         },
         {
            title: "indexlist 快速索引列表",
            page: "/pages/indexlist/indexlist"
         },
				{
					title: "chart 图表",
					page: "/pages/index/index"
				}
      ]
   },
   computedA: {
      // 配置全局
      cart: ['count', 'list']
   },
   onLoad: function(options) {
      A.setInterval("times", res => {
         this.setData({
            count: res.count
         })
      })
      console.log(A.validateFrom({
         em: "wagqq.com"
      }, {
         em: "email"
      }));
      console.log(A.validateFrom({
         em: "f"
      }, {
         em: {
            exp: ["empty", /^[0-9]*$/],
            err: "错误"
         }
      }));
   },
   onShow: function() {
      A.updata.getMember()
   },
   tapMenu: function(evt) {

      let page = evt.detail.value.page
      if (page) {
         A.G("navigateTo://"+page);
         return
      }
      A.S.toast(evt.detail.value.title);
      // A.G(evt.detail.value.page);
   }
}));