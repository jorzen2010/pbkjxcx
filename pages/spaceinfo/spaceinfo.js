// pages/spaceinfo/spaceinfo.js
const app = getApp();
const peiban = require('../../utils/peiban.js');
var Wxparse = require("../../utils/wxParse/wxParse.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canEnter:false,
    space:{},
    book: {},
    mulu: [],
    ifVip:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    _this.setData({
      ifVip: app.globalData.ifVip
    });
    peiban.getSpaceById(_this.options.id)
    .then(function (data) {
      _this.setData({
        space: data
      });
      console.log(data);
      peiban.getBookById(data.ProductBook)
      .then(function(data){
        _this.setData({
          book: data
        });
        console.log(data);
        Wxparse.wxParse('article_content', 'html', data.Content, _this, 5)
      })

    });
    peiban.getRenwuListByBookId(_this.options.id)
      .then(function (data) {
        _this.setData({
          mulu: data.renwus
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
  zixun:function(){
    wx.showActionSheet({
      itemList: ['请添加微信：peibanshichengzhang'],
      success(res) {
        console.log(res.tapIndex)
        if(res.tapIndex==1)
        {
          console.log('你选择了1');
        }
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  fenxiang: function () {
    wx.showActionSheet({
      itemList: ['转发给好友','转发到群'],
      success(res) {
        console.log(res.tapIndex)
        if (res.tapIndex == 1) {
          console.log('你选择了1');
        }
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },


  spacelist: function (event) {
    wx.switchTab({
      url: '/pages/spacelist/spacelist',
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
 
})