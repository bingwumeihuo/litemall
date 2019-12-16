const util = require('../../utils/util.js');
const api = require('../../config/api.js');

//获取应用实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '爱淘小站',
    address: 'https://www.dubbo.top/',
    latitude: '31.201900',
    longitude: '121.587839',
    phone: '17638577891',
    qq: '1183223389'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAbout()
  },
  getAbout: function () {
    let that = this;
    util.request().then(function (res) {
      if (res.errno === 0) {
        that.setData({
          name: res.data.name,
          address: res.data.address,
          phone: res.data.phone,
          qq: res.data.qq,
          latitude: res.data.latitude,
          longitude: res.data.longitude
        });
      }
    });
  },
  showLocation: function (e) {
    var that = this
    wx.openLocation({
      latitude: parseFloat(that.data.latitude),
      longitude: parseFloat(that.data.longitude),
      name: that.data.name,
      address: that.data.address,
    })
  },
  callPhone: function (e) {
    var that = this
    wx.makePhoneCall({
      phoneNumber: that.data.phone,
    })
  }
})