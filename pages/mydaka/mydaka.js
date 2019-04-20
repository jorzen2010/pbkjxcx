// pages/mydaka/mydaka.js
const app = getApp();
const peiban = require('../../utils/peiban.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    mybijis:[]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var _this = this;
    _this.setData({
      userInfo: app.globalData.userInfo
    });
    console.log(app.globalData.userInfo);
    peiban.getBijisByPid(app.globalData.userInfo.Id,1)
      .then(function (data) {
        _this.setData({
          mybijis: data.dakas
        });
        console.log(data);
      });

  
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
  goto:function(){
    wx.navigateTo({
      url: '/pages/spacelist/spacelist',
    })
   
  },
  dakacontent:function(){
    wx.navigateTo({
      url: '/pages/dakacontent/dakacontent',
    })
  },
  dakacontent: function (event) {
    wx.navigateTo({
      url: '/pages/dakacontent/dakacontent?id=' + event.currentTarget.dataset.id,
    })
  }
})