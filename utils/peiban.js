const app = getApp();
const userlogin = (jscode) => new Promise((resolve) => {
  // wx.request({
  //   url: app.globalData.apiUrl + '/api/OnLogin?js_code=' + jscode + '&pid=' + app.globalData.zixunshi_id,
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   success: function (res) {
  //     resolve(res.data);
  //     console.log('openid:' + res.data.openid);
  //     console.log('session_key:' + res.data.session_key);
  //   }
  // })
});
