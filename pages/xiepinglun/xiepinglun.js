// pages/xiepinglun/xiepinglun.js
const app = getApp();
const peiban = require('../../utils/peiban.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dakaid:0,
    daka:{},
    userid: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    _this.setData({
      dakaid: options.id,
      userid: app.globalData.userInfo.Id
    })
    wx.request({
      url: app.globalData.apiUrl + 'xiaochengxu/GetBijiById?id=' + _this.data.dakaid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          daka: res.data,
        });
      },
      complete: function (res) {
        wx.hideLoading();
      }
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
  pinglun: function (e) {
    var _this = this;
    var pingluncontent = e.detail.value.pingluncontent;
    console.log('pingluncontent', pingluncontent);

    peiban.dakaPinglun(_this.data.daka.Id, _this.data.daka.RenwuZhixingzhe, _this.data.daka.Peibanshi, _this.data.daka.Kongjian, _this.data.daka.ProductBook, _this.data.userid, pingluncontent)
      .then(function (data) {

        if (data.MessageStatus == 'true') {

          wx.showModal({
            title: '评论成功',
            content: '评论成功',
            showCancel: 'false',
            success(res) {
              if (res.confirm) {
                wx.navigateBack({
                })
              }
            }
          })
          console.log('评论成功');
        }
        else {
          console.log('打卡失败');
        }

      })


  }
})