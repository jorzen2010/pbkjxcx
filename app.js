//app.js
const peiban = require('src/js/peiban.js');
App({
  onLaunch: function () {

    // 登录
    wx.login({
      success: res => {
        var _this=this;
        console.log('code是：'+res.code)

        wx.request({
          url: _this.globalData.apiUrl + 'xiaochengxu/xcxLogin',
          data: {
            js_code: res.code
          },
          headers: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            console.log(res.data);
           
             _this.globalData.openid = res.data.openid;
             _this.globalData.unionid = res.data.unionid;
             _this.globalData.session_key = res.data.session_key;
            console.log(_this.globalData.unionid);

            wx.request({
              url: _this.globalData.apiUrl + "xiaochengxu/GetuserinfoByunionid?unionid=" + res.data.unionid,
              headers: {
                'Content-Type': 'application/json'
              },
              success: function (res) {
                _this.globalData.userInfo = res.data;
                console.log(_this.globalData.userInfo);
              },
            });
          
          }
        })
        //发送 res.code 到后台换取 openId, sessionKey, unionId      
      }
    })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null,
    openid:'',
    unionid:'',
    session_key:'',
    //apiUrl:'http://localhost:1220/',
    apiUrl: 'http://peiban.zzd123.com/'
  }
})