//app.js
App({
  onLaunch: function () {

    // 登录
    wx.login({
      success: res => {
        var _this=this;
       // console.log('code是：'+res.code)

        wx.request({
          url: _this.globalData.apiUrl + 'xiaochengxu/xcxLogin',
          data: {
            js_code: res.code
          },
          headers: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
           // console.log('获取到的openid信息：'+res.data.openid);
            _this.globalData.loginInfo=res.data;
            if (_this.loginInfoReadyCallback) {
              _this.loginInfoReadyCallback(res)
            }
            wx.request({
              url: _this.globalData.apiUrl + "xiaochengxu/GetuserinfoByunionid?unionid=" + res.data.unionid,
              headers: {
                'Content-Type': 'application/json'
              },
              success: function (res) {
                if (res.data.MessageStatus=='false')
                {
                  wx.redirectTo({
                    url: '/pages/weizhuce/weizhuce',
                  })               

                }
                else
                { 
                  _this.globalData.userInfo = res.data;
                  if (_this.userInfoReadyCallback) {
                    _this.userInfoReadyCallback(res)
                  }
               //   console.log(_this.globalData.userInfo);
                }
                }

                
               
               //增加一个回调函数，保证已经赋值才能使用
              
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
    loginInfo:null,
    openid:'',
    unionid:'',
    session_key:'',
    //apiUrl:'http://localhost:1220/',
    apiUrl: 'https://peiban.zzd123.com/'
  }
})