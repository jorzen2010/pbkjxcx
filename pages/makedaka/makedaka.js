// pages/makedaka/makedaka.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kongjianid:0,
    peibanshi:0,
    renwuid:0,
    bookid:0,
    userid:0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    _this.setData({
      kongjianid: options.kid,
      peibanshi: options.peibanshi,
      renwuid: options.id,
      bookid: options.bid
    })
    console.log('空间ID是：'+options.kid+'陪伴师' + options.peibanshi+'任务ID' +options.id+'bookid'+options.bid);
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

  }
})