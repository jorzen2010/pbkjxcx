// pages/daka/daka.js
const app = getApp();
const peiban = require('../../utils/peiban.js');
var Wxparse = require("../../utils/wxParse/wxParse.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    renwu:{},
    renwuid:0,
    space:{},
    kongjianid:0,
    peibanshiid:0,   
    renwubijis:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    _this.setData({
      renwuid: options.id,
      kongjianid:options.kid,
    })
    console.log('id是:'+options.id);
    console.log('陪伴式id是:' + options.peibanshi);
    console.log('空间id是:' + options.kid);
    // _this.setData({ 
    //   xianshiyaoiqucontent: _this.data.dakayaoqiucontent,
    //   zhedieyaoqiucontent: _this.data.dakayaoqiucontent.substring(0, 50)
    //   });

  //  console.log(_this.data.renwuid);

    

    wx.request({
      url: app.globalData.apiUrl + 'xiaochengxu/GetRenwuById?id=' +_this.data.renwuid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
     
        _this.setData({
          renwu: res.data,

        });
        console.log(res.data)

        Wxparse.wxParse('article_content', 'html', res.data.Content, _this, 5);
        peiban.getBijiByRenwuId(res.data.Id)
          .then(function (data) {
            _this.setData({
              renwubijis: data.dakas
            });
            console.log(data.dakas);
            
          });
      }
    });

    peiban.getSpaceById(_this.data.kongjianid)
    .then(function (data){
      _this.setData({
        space:data
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

  dakacontent: function (event) {
    wx.navigateTo({
      url: '/pages/dakacontent/dakacontent?id=' + event.currentTarget.dataset.id,
    })
  },
  makedaka: function (event) {
    var _this=this;
    wx.redirectTo({
      url: '/pages/makedaka/makedaka?id=' + event.currentTarget.dataset.id + '&kid=' + _this.data.space.Id + '&peibanshi=' + _this.data.space.Peibanshi + '&bid='+_this.data.space.ProductBook,
    })
  }

})