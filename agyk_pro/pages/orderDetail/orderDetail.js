// pages/orderDetail/orderDetail.js
const {formatTime} = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:formatTime(new Date()).split(' ')[0],
    index:0,
    array:[
      {
        id:0,
        name:'上午'
      },
      {
        id:1,
        name:'下午'
      },
    ],
    indexSexy:0,
    sexy:[
      {
        id:0,
        name:'男'
      },
      {
        id:1,
        name:'女'
      },
    ],
    dialog:false
  },
  markClick(){
    this.setData({
      dialog:false,
    })
  },
  back(){
    console.log('返回按钮被点击')
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindPickerSexy(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  submit(){
    this.setData({
      dialog:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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