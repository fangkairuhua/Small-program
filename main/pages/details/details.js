// pages/details/details.js

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
      "https://cms-resource.azoyacdn.com/images/banner/26/a475bbada7d697750afc4e09724b1481.jpg",
      "https://cms-resource.azoyacdn.com/images/banner/26/2192b23556767eae9bf5fce544c30410.jpg",
    ],
    goods: [{
      id: 4,
      goodsName: "ACQUA 帕尔玛之水",
      goodsImage: "../../image/goods01.jpg",
      goodsImgs: [
        "https://cms-resource.azoyacdn.com/images/banner/26/81b1b2ed2819f5560b8d41bf39520d86.jpg",
        "https://cms-resource.azoyacdn.com/images/banner/26/b760ef61cfbf47fb7b213080a849d061.jpg",

      ],
      goodsPrice: "66.49",
      goodsPriceOld: "420",
      
      goodsDetail: [
        "//img12.360buyimg.com/imgzone/jfs/t5713/263/1432254650/87052/715e5839/592680c6N3c772199.jpg!q70.dpg.webp"
      ],
      goodsDetails: [
        "//img10.360buyimg.com/imgzone/jfs/t1/19046/24/12393/123115/5c97722bE331d47a1/2f47c0bebfac2130.jpg!q70.dpg.webp"
      ]

    }],
    num: 0
  },


  // 数据缓存
  // 同步数据  数据量小，直接使用同步操作可以。
  // wx.setStorageSync    添加数据
  // wx.removeStorageSync 删除数据
  // wx.getStorageSync    获取数据
  // wx.clearStorageSync  清空数据
  // wx.getStorageInfoSync 获取信息数据

  // 异步数据 数据量大，需要进行计算使用异步操作
  // wx.setStorage       添加数据
  // wx.removeStorage    删除数据
  // wx.getStorageInfo   获取信息数据
  // wx.getStorage       获取数据
  // wx.clearStorage     清空数据
  // 添加购物车
  getCarNum() {

    var CarData = {
      id: this.data.goods[0].id,
      carName: this.data.goods[0].goodsName,
      carImage: this.data.goods[0].goodsImage,
      carPrice: this.data.goods[0].goodsPrice,
      carNum: 1
    }


    // 1.判断数据缓存中是否有数据
    var GoodsCarList = wx.getStorageSync("GoodsCarList");
    if (GoodsCarList) {

      var isGoodsData = true; //默认值代表状态，有数据，没有相同id
      // 1.1有数据，相同商品数据，数量加一
      for (var i = 0; i < GoodsCarList.length; i++) {
        if (GoodsCarList[i].id == this.data.goods[0].id) {
          GoodsCarList[i].carNum += 1;
          isGoodsData = false;
        }
      }
      // 1.2有数据，数据中没有相同id数据，数组中追加数据
      if (isGoodsData) {
        // 把新商品添加购物车
        GoodsCarList.push(CarData);
        isGoodsData = true;
      }

      wx.setStorageSync("GoodsCarList", GoodsCarList);
    } else {
      // 1.3没有数据,添加数据
      wx.setStorageSync("GoodsCarList", [CarData])
    }


    this.setData({
      num: wx.getStorageSync("GoodsCarList").length
    })

  },
  
  // 跳转购物车页面
  getCart() {
    wx.switchTab({
      url: "/pages/cart/cart"
    })
  },
 
  // 跳转首页
  getIndex() {
    wx.switchTab({
      url: "/pages/index/index"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function({
    id
  }) {
    // 通过跳转路由获取id
    // 请求商品数据
    var _this = this;
    GoodsList.goodsListIdData(id, function({
      data
    }) {
      _this.setData({
        goods: [{
          id: data.result.id,
          goodsName: data.result.name,
          goodsImage: data.result.image,
          goodsImgs: data.result.imgs,
          goodsPrice: data.result.price,
          goodsPriceOld: "300",
          goodsDetails: "../../image/IMG_0466.JPG"
        }]
      })

    })

    // wx.setStorageSync    添加数据
    // wx.setStorageSync("GoodsCarList", "添加数据");
    // wx.removeStorageSync 删除数据
    // wx.removeStorageSync("GoodsCarList");
    // wx.getStorageSync    获取数据
    // console.log(wx.getStorageSync("GoodsCarList"));
    // wx.clearStorageSync  清空数据
    // wx.clearStorageSync(); //所有数据清空
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      num: wx.getStorageSync("GoodsCarList").length
    })
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