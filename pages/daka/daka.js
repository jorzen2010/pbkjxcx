// pages/daka/daka.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    dakayaoqiucontent: '这里的内容应该是有视频这里的内容应该是有音频这里的内容应该是有视频这里的内容应该是有音频这里的内容应该是有视频这里的内容应该是有音频这里的内容应该是有视频这里的内容应该是有音频这里的内容应该是有视频这里的内容应该是有音频这里的内容应该是有视频这里的内容应该是有音频这里的内容应该是有视频这里的内容应该是有音频这里的内容应该是有视频这里的内容应该是有音频这里的内容应该是有视频这里的内容应该是有音频',
    zhedieyaoqiucontent:'',
    xianshiyaoiqucontent:'',
    zhedianbtn:'block',
    zhankaibtn:'none',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    _this.setData({ 
      xianshiyaoiqucontent: _this.data.dakayaoqiucontent,
      zhedieyaoqiucontent: _this.data.dakayaoqiucontent.substring(0, 50)
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
  zhedie:function(){
    var _this=this;
    _this.setData({ 
      xianshiyaoiqucontent: _this.data.zhedieyaoqiucontent,
      zhedianbtn: 'none',
      zhankaibtn: 'block'
    });
  },
  zhankai: function () {
    var _this = this;
    _this.setData({ 
      xianshiyaoiqucontent: _this.data.dakayaoqiucontent,
      zhedianbtn: 'block',
      zhankaibtn: 'none'
    });
  },
  spacedaka: function () {
    wx.navigateTo({
      url: '/pages/spacedaka/spacedaka',
    })
  },
  spacemulu: function () {
    wx.navigateTo({
      url: '/pages/spacemulu/spacemulu',
    })
  },
  spaceinfo: function () {
    wx.navigateTo({
      url: '/pages/spaceinfo/spaceinfo',
    })
  },
})