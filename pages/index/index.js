//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items: [{
        name: "饼图",
        type: "pie",
        image: '/assets/images/pie.png'
      },
      {
        name: "柱状图",
        type: "bar",
				image: '/assets/images/bar.png'
      },
      {
        name: "折线图",
        type: "line",
				image: '/assets/images/line.png'
      },
      {
        name: "环状图",
        type: "ring",
				image: '/assets/images/ring.png'
      },
      {
        name: "玫瑰图",
        type: "rose",
				image: '/assets/images/rose.png'
      },
      {
        name: "雷达图",
        type: "radar",
				image: '/assets/images/radar.png'
      },
      {
        name: "气泡图",
        type: "bubble",
				image: '/assets/images/bubble.png'
      }
    ],
  },
  onLoad: function() {

  },
  itemClicked: function(res) {
    switch (res.currentTarget.dataset.type) {
      case "pie":
        {
          wx.navigateTo({
            url: './pie/pie',
          })
          break;
        }
      case "rose":
        {
          wx.navigateTo({
            url: './rose/rose',
          })
          break;
        }
      case "ring":
        {
          wx.navigateTo({
            url: './ring/ring',
          })
          break;
        }
      case "line":
        {
          wx.navigateTo({
            url: './line/line',
          });
          break;
        }
      case "radar":
        {
          wx.navigateTo({
            url: './radar/radar',
          })
          break;
        }
      case "bubble":
        {
          wx.navigateTo({
            url: './bubble/bubble',
          })
          break
        }
      case "bar":
        {
          wx.navigateTo({
            url: './bar/bar',
          })
          break;
        }
      default:
        {
          console.log(res.currentTarget.dataset);
          break;
        }
    }
  },
})