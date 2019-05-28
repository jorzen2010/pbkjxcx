// pages/makedaka/makedaka.js
const app = getApp();
const peiban = require('../../utils/peiban.js');
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
      bookid: options.bid,
      userid: app.globalData.userInfo.Id
    })
    console.log('空间ID是：' + options.kid + '陪伴师' + options.peibanshi + '任务ID' + options.id + 'bookid' + options.bid + 'userid' + app.globalData.userInfo.Id);
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
  daka:function(e){
    var _this=this;
    var dakatitle = e.detail.value.dakatitle;
    var dakacontent = e.detail.value.dakacontent;
    console.log('dakatitle', dakatitle);
    console.log('dakacontent', dakacontent);

    if(dakatitle==''||dakacontent=='')
    {
      wx.showModal({
        title: '错误',
        content: '题目和内容均不能为空',
        showCancel: 'false',
      })
    }
    else
    {
      peiban.renwuDaka(_this.data.renwuid, _this.data.bookid, _this.data.kongjianid, _this.data.peibanshi, _this.data.userid, dakatitle, dakacontent)
        .then(function (data) {

          if (data.MessageStatus == 'true') {

            wx.showModal({
              title: '打卡成功',
              content: '打卡成功',
              showCancel: 'false',
              success(res) {
                if (res.confirm) {
                  wx.navigateBack({
                  })
                }
              }
            })
            console.log('打卡成功');
          }
          else {
            console.log('打卡失败');
          }

        })

    }

    
    

  }
})