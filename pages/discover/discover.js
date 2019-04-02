// pages/discover/discover.js
const app = getApp();
const peiban = require('../../utils/peiban.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bijis:[],
    dakas:[],
    userinfo:null,
    spaceslist:[],

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this; 
    //这是一个回调函数的判断
    app.userInfoReadyCallback=function(){

      console.log(app.globalData.userInfo);
      // peiban.getSpaceByUid(app.globalData.userInfo.Id,0)
      // .then(function (data){
      //   _this.setData({
      //     spaceslist:data.spaces
      //   })
      // console.log(data);
      // })

    };

    peiban.getbijisByCount(3)
    .then(function (data) {
        _this.setData({
          bijis: data.dakas
        });
    });

    peiban.getbijisByCount(5)
      .then(function (data) {
        _this.setData({
          dakas: data.dakas
        });
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
  dakacontent: function (event){
    wx.navigateTo({
      url: '/pages/dakacontent/dakacontent?id=' + event.currentTarget.dataset.id,
    })
  }
})