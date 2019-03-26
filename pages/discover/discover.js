// pages/discover/discover.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pagecount:0,
    bijis:[]

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    wx.request({
      url: app.globalData.apiUrl +'xiaochengxu/getbiji',
      headers: {
            'Content-Type': 'application/json'
      },
      success:function(res){
        _this.setData({
          pagecount: res.data.pagecount,
          bijis: res.data.dakas
        });

      }
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
  spacetest: function () {
    wx.navigateTo({
      url: '/pages/spacetest/spacetest',
    })
  },
  dakacontent:function(){
    wx.navigateTo({
      url: '/pages/dakacontent/dakacontent',
    })
  }
})