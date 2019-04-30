// pages/spacemulu/spacemulu.js
const app = getApp();
const peiban = require('../../utils/peiban.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    space:{},
    mulu:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    peiban.getSpaceById(_this.options.id)
      .then(function (data) {
        _this.setData({
          space: data
        });
      })
    peiban.getRenwuListByBookId(_this.options.id)
    .then(function(data){
      _this.setData({
        mulu:data.renwus
      })
      console.log(data);  
    })

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

  },
  spaceinfo: function () {
    wx.navigateTo({
      url: '/pages/spaceinfo/spaceinfo',
    })
  },
  spacedaka: function (event) {
    wx.navigateTo({
      url: '/pages/spacedaka/spacedaka?id=' + event.currentTarget.dataset.id,
    })
  },
  spacemulu: function (event) {
    wx.navigateTo({
      url: '/pages/spacemulu/spacemulu?id=' + event.currentTarget.dataset.id,
    })
  },
  spaceinfo: function (event) {
    wx.navigateTo({
      url: '/pages/spaceinfo/spaceinfo?id=' + event.currentTarget.dataset.id,
    })
  },
  daka: function (event) {
    var _this = this;
    wx.navigateTo({
      url: '/pages/daka/daka?id=' + event.currentTarget.dataset.id + '&peibanshi=' + _this.data.space.Peibanshi+'&kid='+_this.data.space.Id+'&proid='+_this.data.space.ProductBook,
    })
  }
})