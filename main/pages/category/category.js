// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigation: [{
      id: 0,
      name: '香水香氛'
    },
    {
      id: 1,
      name: '面部护理'
    },
    {
      id: 2,
      name: '肌肤护理'
    },
    {
      id: 3,
      name: '人气美妆'
    },
    {
      id: 4,
      name: '新品上线'
    },
    {
      id: 5,
      name: '畅销推荐'
    },
    {
      id: 6,
      name: '洗护造型'
    },
    {
      id: 7,
      name: '礼盒套餐'
    }
    ],
    imgsid: 0,
    boxheight: null,
    imgs: [
      {
        imgss: ['../../image/1.jpg', '../../image/2.jpg', '../../image/3.jpg','../../image/4.jpg','../../image/5.jpg','../../image/6.jpg'],
      },
      {
        imgss: ['../../image/a1.jpg', '../../image/a2.jpg', '../../image/a3.jpg', '../../image/a1.jpg', '../../image/a2.jpg', '../../image/a3.jpg'],
      },
      {
        imgss: ['../../image/q1.jpg', '../../image/q2.jpg', '../../image/q3.jpg', '../../image/4.jpg', '../../image/5.jpg', '../../image/6.jpg'],
      },
      {
        imgss: ['../../image/a2.jpg', '../../image/2.jpg', '../../image/q3.jpg', '../../image/4.jpg', '../../image/5.jpg', '../../image/6.jpg'],
      },
      {
        imgss: ['../../image/a3.jpg', '../../image/2.jpg', '../../image/q3.jpg', '../../image/4.jpg', '../../image/5.jpg', '../../image/6.jpg'],
      },
      {
        imgss: ['../../image/q1.jpg', '../../image/a2.jpg', '../../image/a3.jpg', '../../image/q1.jpg', '../../image/5.jpg', '../../image/a3.jpg'],
      },
      {
        imgss: ['../../image/4.jpg', '../../image/6.jpg', '../../image/3.jpg', '../../image/a3.jpg', '../../image/q2.jpg', '../../image/6.jpg'],
      },
      {
        imgss: ['../../image/4.jpg', '../../image/3.jpg', '../../image/3.jpg', '../../image/a1.jpg', '../../image/a3.jpg', '../../image/a1.jpg'],
      },
 

      // '../../image/swiper1.jpg',
      // '../../image/goods03.jpg',
      // '../../image/goodslist.jpg',
      // '../../image/movie02.jpg',
      // '../../image/test.jpg',
      // '../../image/goods04.jpg',
      // '../../image/zhutu.jpg'
    ]

  },
  onclick(event) {
    //获取点击的元素的id
    var id = event.target.dataset.id;
    this.setData({
      imgsid: id
    })
    console.log(this.data.imgs[id].imgss[1])
  },
  onhua(event) {
    imgsid: null,
      wx.createSelectorQuery().selectAll('.imgsbox').boundingClientRect(function (rect) {
        // console.log(rect)
      }).exec()
    // console.log(this.data.boxheight)
    // event.detail.scrollTop=this.data.boxheight
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
    var getid = wx.getStorageSync('getid');
    this.setData({
      imgsid: getid == "" ? 0 : getid
    })
    //wx.getSystemInfo 小程序中所有信息
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        // this.setData()页面数据同步
        _this.setData({
          scrollHeigth: res.windowHeight
        })
      },
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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