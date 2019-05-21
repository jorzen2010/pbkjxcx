// pages/dakacontent/dakacontent.js
const app = getApp();
const peiban = require('../../utils/peiban.js');
var Wxparse = require("../../utils/wxParse/wxParse.js");
var util = require("../../utils/common.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dakaid:0,
    daka:{},
    article_content:'',
    //dianzans:[],
    dianzanrens:[],
    pingluns:[],
    pinglunrens:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    _this.setData({
      dakaid:options.id,
    })
    wx.showLoading({
      title: '加载中...',
    })
    
    wx.request({
      url: app.globalData.apiUrl + 'xiaochengxu/GetBijiById?id='+_this.data.dakaid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        res.data.DakaTime = util.formatDateStamp(res.data.DakaTime, "short");
        _this.setData({
          daka: res.data,
          
        });
        
        Wxparse.wxParse('article_content', 'html', res.data.DakaContent, _this, 5)
      },
      complete:function(res){
        wx.hideLoading();
      }
    });
    wx.request({
      url: app.globalData.apiUrl + 'xiaochengxu/GetDianzanByDakaId?id=' + _this.data.dakaid+'&count=100',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // _this.setData({
        //   dianzans: res.data.dianzans,

        // });

        Promise.all(res.data.dianzans.map(item => peiban.getUserInfoById(item.DianzanRen)))
          .then(function (data) {
            _this.setData({
              dianzanrens: data
            });
            console.log(data);
          })
      }
    });
    wx.request({
      url: app.globalData.apiUrl + 'xiaochengxu/GetPinglunByDakaId?id=' + _this.data.dakaid + '&count=100',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          pingluns: res.data.pingluns,
        });
        Promise.all(res.data.pingluns.map(item => peiban.getUserInfoById(item.PinglunRen)))
          .then(function (data) {
            _this.setData({
              pinglunrens: data
            });
            console.log(data);
          })

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

  }
})