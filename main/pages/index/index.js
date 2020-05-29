// 引入js文件
var Category = require("../../Api/category.js");
var GoodsList = require("../../Api/goodsList.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    interval: 3000,
    duration: 300,
    imgs: [
      "https://cms-resource.azoyacdn.com/images/banner/26/81b1b2ed2819f5560b8d41bf39520d86.jpg",
      "https://cms-resource.azoyacdn.com/images/banner/26/b760ef61cfbf47fb7b213080a849d061.jpg",
      "https://cms-resource.azoyacdn.com/images/banner/26/a475bbada7d697750afc4e09724b1481.jpg",
      "https://cms-resource.azoyacdn.com/images/banner/26/a86f8e95cbb41c78fe9babda8b0b8997.jpg",
      "https://cms-resource.azoyacdn.com/images/banner/26/2192b23556767eae9bf5fce544c30410.jpg"
    ],
    iconArray: [
      {
        iconUrl: "https://img-resource.azoyacdn.com/media/cdc9e4959ab20d24434282f94d7bfc77/20601/216a3e8abffe1c545dcbca688a198efb.png",
        iconText: "香水香氛"
      },
      {
        iconUrl: "https://img-resource.azoyacdn.com/media/cdc9e4959ab20d24434282f94d7bfc77/18837/6bafb4575ef9dc6845244c58b383774f.png",
        iconText: "面部护理"
      },
      {
        iconUrl: "https://img-resource.azoyacdn.com/media/cdc9e4959ab20d24434282f94d7bfc77/19036/4300d4080a30711d616f79470148b722.png",
        iconText: "肌肤护理"
      },
      {
        iconUrl: "https://img-resource.azoyacdn.com/media/cdc9e4959ab20d24434282f94d7bfc77/19476/d421d0b6c8bcab62a36563c04f44967e.png",
        iconText: "人气美妆"
      },
      {
        iconUrl: "https://img-resource.azoyacdn.com/media/cdc9e4959ab20d24434282f94d7bfc77/19476/d421d0b6c8bcab62a36563c04f44967e.png",
        iconText: "新品上线"
      },
      {
        iconUrl: "https://img-resource.azoyacdn.com/media/cdc9e4959ab20d24434282f94d7bfc77/18762/9c3756f65c429935a496893161b7bd7e.png",
        iconText: "畅销推荐"
      },
      {
        iconUrl: "https://img-resource.azoyacdn.com/media/cdc9e4959ab20d24434282f94d7bfc77/21164/21cf4d0c6f03de3872c4edce83602181.png",
        iconText: "洗护造型"
      },
      {
        iconUrl: "https://img-resource.azoyacdn.com/media/cdc9e4959ab20d24434282f94d7bfc77/19147/446421a4b674211dc44b5ae26c0d47cc.png",
        iconText: "礼盒套餐"
      },
    ],
    goodsList: [
      {
        id: 1,
        goodsName: "ACQUA 帕尔玛之水",
        goodsImage: "https://fn-assets.azoyacdn.com/media/catalog/product/b/3/b374c7918fe74451b6a55567229eddae1561711337649jxfulw9n10286.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=",
        goodsAddress: "66.49",
        goodsPrice: "法国"
      },
      {
        id: 1,
        goodsName: "ISSEY  女士淡香水",
        goodsImage: "https://fn-assets.azoyacdn.com/media/catalog/product/1/2/121717.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=",
        goodsAddress: "38.49",
        goodsPrice: "法国"
      },
      {
        id: 1,
        goodsName: " BURBERRY 博柏利 ",
        goodsImage: "https://fn-assets.azoyacdn.com/media/catalog/product/2/8/287647.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=",
        goodsAddress: "37.09",
        goodsPrice: "法国"
      },
      {
        id: 1,
        goodsName: "BVLGARI（夜幽） ",
        goodsImage: "https://fn-assets.azoyacdn.com/media/catalog/product/1/4/148744.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=",
        goodsAddress: "56.69",
        goodsPrice: "英国"
      },
      {
        id: 1,
        goodsName: " Laurent 圣罗兰 ",
        goodsImage: "https://fn-assets.azoyacdn.com/media/catalog/product/1/2/126445.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=",
        goodsAddress: "56.69",
        goodsPrice: "美国"
      },
      {
        id: 1,
        goodsName: "GUERLAIN 娇兰 ",
        goodsImage: "https://fn-assets.azoyacdn.com/media/catalog/product/1/6/167808.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=",
        goodsAddress: "56.69",
        goodsPrice: "英国"
      },
      {
        id: 1,
        goodsName: "CREED 皇家公主 ",
        goodsImage: "https://fn-assets.azoyacdn.com/media/catalog/product/2/7/278057.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=",
        goodsAddress: "167.69",
        goodsPrice: "英国"
      },
      {
        id: 1,
        goodsName: "Jean Paul Gaultier ",
        goodsImage: "https://fn-assets.azoyacdn.com/media/catalog/product/3/0/301133.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=",
        goodsAddress: "73.69",
        goodsPrice: "英国"
      },
      {
        id: 1,
        goodsName: "Ariana Grande  ",
        goodsImage: "https://fn-assets.azoyacdn.com/media/catalog/product/2/8/280094.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=",
        goodsAddress: "33.69",
        goodsPrice: "英国"
      }
    ]
  },
  getCategory(options){
    var id=options.target.dataset.id;
    wx.setStorageSync("CategoryId",id);
    wx.switchTab({
      url: '/pages/category/category',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    // 分类接口
    Category.categoryData(function (res) {
      _this.setData({
        "iconArray": res.data.result
      })
    })

    // 商品列表接口
    GoodsList.goodsListData(function (res) {
      var data = res.data.result;
      var arr = [];
      data.forEach((item) => {
        arr.push({
          id: item.id,
          goodsName: item.name,
          goodsImage: item.image,
          goodsAddress: "法国",
          goodsPrice: item.price
        })
      })
      _this.setData({
        "goodsList": arr
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // var _this = this;
    // //   请求分类接口数据
    // wx.request({
    //   url: 'http://127.0.0.1:3000/category', //仅为示例，并非真实的接口地址
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res)
    //     _this.setData({
    //       "iconArray": res.data.result
    //     })
    //   }
    // })
    // // 请求商品接口
    // wx.request({
    //   url: 'http://127.0.0.1:3000/goodsList', //仅为示例，并非真实的接口地址
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     var data = res.data.result;
    //     var arr = [];
    //     console.log(data);
    //     data.forEach((item) => {
    //       arr.push({
    //         id: item.id,
    //         goodsName: item.name,
    //         goodsImage: item.image,
    //         goodsAddress: "法国",
    //         goodsPrice: item.price
    //       })
    //     })
    //     console.log(data);
    //     _this.setData({
    //       "goodsList": arr
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})