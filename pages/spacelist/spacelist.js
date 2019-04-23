// pages/spacelist/spacelist.js
const app = getApp();
const peiban = require('../../utils/peiban.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    spacelist:[]
   

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;

    peiban.getSpaceByUid(app.globalData.userInfo.Id,0)
      .then(function (data) {
        
        Promise.all(data.spaces.map(item => peiban.getSpaceById(item.Id)))
        .then(function(res){
          _this.setData({
            spacelist: res
          });
          console.log(res);
        })
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
  spaceinfo:function(event){
    wx.navigateTo({
      url: '/pages/spaceinfo/spaceinfo?id=' + event.currentTarget.dataset.id,
    })
   
  },
  spacemulu: function (event) {
    wx.redirectTo({
      url: '/pages/spacemulu/spacemulu?id=' + event.currentTarget.dataset.id,
    })
  },
  spacedaka: function (event) {
    wx.redirectTo({
      url: '/pages/spacedaka/spacedaka?id=' + event.currentTarget.dataset.id,
    })
  }
})