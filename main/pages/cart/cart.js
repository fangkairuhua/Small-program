// pages/cart/cart.js
// pages/search/search.js

Page({

  /**
   * 页面的初始数据
   */
  data: {

    goodsList: [
      // {
      //     id: 1,
      //     carName: "商品名称",
      //   carImage: "https://fn-assets.azoyacdn.com/media/catalog/product/b/3/b374c7918fe74451b6a55567229eddae1561711337649jxfulw9n10286.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=",
      //     carPrice: "111.00",
      //     carNum: 7
      // },
      // {
      //     id: 2,
      //     carName: "商品名称",
      //   carImage: "https://fn-assets.azoyacdn.com/media/catalog/product/1/2/121717.jpg?imageMogr2/thumbnail/325x325/extent/325x325/background/d2hpdGU=",
      //     carPrice: "38.49",
      //     carNum: 1
      // },
      // {
      //     id: 3,
      //     carName: "商品名称",
      //     carImage: "../../image/goods01.jpg",
      //     carPrice: "111.00",
      //     carNum: 1
      // }
    ],
    totalPrice: 200
  },
  // 减法计算
  carReduce(options) {
    // 获取id下标值
    console.log(this.data.goodsList);
    var index = options.target.dataset.id;
    console.log(index);
    var num = this.data.goodsList[index].carNum; //获取商品数量
    // 提前拼接路径
    var key = "goodsList[" + index + "].carNum";

    var obj = {};
    if (num <= 1) {
      obj[key] = 1;
    } else {
      num--; //数量减一
      obj[key] = num;
    }

    this.setData(obj);

    // 调用onshow方法
    this.getTotalData();

  },
  // 加法计算
  carAdd(options) {
    var index = options.target.dataset.id;
    var num = this.data.goodsList[index].carNum + 1;
    var key = "goodsList[" + index + "].carNum";
    var obj = {};
    // 注意：不会影响原本data中其他对象数据
    obj[key] = num;



    this.setData(obj);

    // 调用onshow方法
    this.getTotalData();

  },

  // 删除功能
  carDel(options) {
    var index = options.target.dataset.id;
    this.data.goodsList.splice(index, 1);

    this.setData({
      goodsList: this.data.goodsList
    })

    // 调用onshow方法
    this.getTotalData();
  },

  // 跳转支付页面
  getPay() {
    wx.navigateTo({
      url: '../pay/pay',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 获取缓存数据
    var getCardata = wx.getStorageSync('GoodsCarList');

    this.setData({
      goodsList: getCardata,
    })
    // 计算总价格
    this.getTotalData();
  },
  // 计算总价格方法
  getTotalData() {

    // 计算总价格
    var totalData = 0;
    for (var i = 0; i < this.data.goodsList.length; i++) {
      totalData = totalData + this.data.goodsList[i].carPrice * this.data.goodsList[i].carNum;
    }

    this.setData({
      totalPrice: totalData
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.setStorageSync("GoodsCarList", this.data.goodsList);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})