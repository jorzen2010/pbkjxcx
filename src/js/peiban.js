const app = getApp();

//通过unionid获取userinfo
const getbijisByCount = (count) => new Promise((resolve) => {
      wx.request({
      url: app.globalData.apiUrl +'xiaochengxu/getbijis?count='+count,
      headers: {
            'Content-Type': 'application/json'
      },
      success:function(res){

        resolve(res.data);
      }
    });
});


//暴露接口给外部使用
module.exports = {
  getbijisByCount: getbijisByCount
}

