const app = getApp();

//按一定数量获取打卡笔记
const getbijisByCount = (count) => new Promise((resolve) => {
  wx.request({
    url: app.globalData.apiUrl + 'xiaochengxu/getbijis?count=' + count,
    headers: {
      'Content-Type': 'application/json'
    },
    success: function (res) {

      resolve(res.data);
    }
  });
});


//根据登陆信息获取空间列表
const getSpaceByUid = (uid,count) => new Promise((resolve) => {
  wx.request({
    url: app.globalData.apiUrl + 'xiaochengxu/GetSpaceByUserId?uid='+uid+'&count=' + count,
    headers: {
      'Content-Type': 'application/json'
    },
    success: function (res) {

      resolve(res.data);
    }
  });
});

//根据登陆信息获取空间列表
const getSpaceListByCount = (count) => new Promise((resolve) => {
  wx.request({
    url: app.globalData.apiUrl + 'xiaochengxu/GetSpaceListByCount?count=' + count,
    headers: {
      'Content-Type': 'application/json'
    },
    success: function (res) {

      resolve(res.data);
    }
  });
});



const getBookById = (id) => new Promise((resolve) => {
  wx.request({
    url: app.globalData.apiUrl + 'xiaochengxu/getBookById?id=' + id,
    headers: {
      'Content-Type': 'application/json'
    },
    success: function (res) {

      resolve(res.data);
    }
  });
});

const getSpaceById = (id) => new Promise((resolve) => {
  wx.request({
    url: app.globalData.apiUrl + 'xiaochengxu/GetSpaceById?id=' + id,
    headers: {
      'Content-Type': 'application/json'
    },
    success: function (res) {

      resolve(res.data);
    }
  });
});

const getRenwuListByBookId = (id) => new Promise((resolve) => {
  wx.request({
    url: app.globalData.apiUrl + 'xiaochengxu/GetRenwuListByBookId?bid=' + id,
    headers: {
      'Content-Type': 'application/json'
    },
    success: function (res) {

      resolve(res.data);
    }
  });
});

const getDakaListBySpaceId = (id) => new Promise((resolve) => {
  wx.request({
    url: app.globalData.apiUrl + 'xiaochengxu/GetBijiBySid?sid=' + id,
    headers: {
      'Content-Type': 'application/json'
    },
    success: function (res) {

      resolve(res.data);
    }
  });
});

const getBijisByPid = (id,pagenum) => new Promise((resolve) => {
  wx.request({
    url: app.globalData.apiUrl + 'xiaochengxu/GetBijiByPid?pid=' + id+'&page=pagenum',
    headers: {
      'Content-Type': 'application/json'
    },
    success: function (res) {

      resolve(res.data);
    }
  });
});

const getBijiByRenwuId = (id, pagenum) => new Promise((resolve) => {
  wx.request({
    url: app.globalData.apiUrl + 'xiaochengxu/GetBijiByRenwuId?rid=' + id + '&page=pagenum',
    headers: {
      'Content-Type': 'application/json'
    },
    success: function (res) {

      resolve(res.data);
    }
  });
});

const getUserInfoById = (id) => new Promise((resolve) => {
  wx.request({
    url: app.globalData.apiUrl + 'xiaochengxu/GetUserInfoById?id='+id,
    headers: {
      'Content-Type': 'application/json'
    },
    success: function (res) {

      resolve(res.data);
    }
  });
});

const getRenwuById = (id) => new Promise((resolve) => {
  wx.request({
    url: app.globalData.apiUrl + 'xiaochengxu/GetRenwuById?id=' + id,
    headers: {
      'Content-Type': 'application/json'
    },
    success: function (res) {

      resolve(res.data);
    }
  });
});


//暴露接口给外部使用
module.exports = {
  getbijisByCount: getbijisByCount,
  getSpaceByUid: getSpaceByUid,
  getSpaceListByCount: getSpaceListByCount,
  getBookById: getBookById,
  getSpaceById: getSpaceById,
  getRenwuListByBookId: getRenwuListByBookId,
  getDakaListBySpaceId: getDakaListBySpaceId,
  getBijisByPid: getBijisByPid,
  getUserInfoById: getUserInfoById,
  getRenwuById: getRenwuById,
  getBijiByRenwuId: getBijiByRenwuId
}

