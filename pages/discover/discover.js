// pages/discover/discover.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'yellow',
    scrollLeft: 0,
    //滚动的数组
    scrolls: [
      {
        name: '黄色',
        tag: 'yellow',
      },
      {
        name: '绿色',
        tag: 'green',
      },
      {
        name: '红色',
        tag: 'red',
      },
    ],

  },
  scroll: function (e) {
    console.log(e)
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
  spacecontent:function(){
    wx.navigateTo({
      url: '/pages/spacecontent/spacecontent',
    })
  },
  spacelist:function(){
    wx.navigateTo({
      url: '/pages/spacelist/spacelist',
    })
  },
  spaceinfo:function(){
    wx.navigateTo({
      url: '/pages/spaceinfo/spaceinfo',
    })
  },
  dakacontent:function(){
    wx.navigateTo({
      url: '/pages/dakacontent/dakacontent',
    })
  }
})