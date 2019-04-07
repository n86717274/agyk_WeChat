// pages/specialOffer/specialOffer.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      {
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551880417230&di=9ec7933372afecbee9fc802d74ec6081&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1606%2F22%2Fc12%2F23207416_1466606519150_mthumb.jpg',
        id:1,
        tit:'屈光不正(近视眼)屈',
        txt:'艾格眼科屈光手术专科：量眼定制 安全有效 由国内首批持有激光屈光手术上岗证...'
      },
      {
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551880417230&di=9ec7933372afecbee9fc802d74ec6081&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1606%2F22%2Fc12%2F23207416_1466606519150_mthumb.jpg',
        id:2,
        tit:'屈光不正(近视眼)',
        txt:'艾格眼科屈光手术专科：量眼定制 安全有效 由国内首批持有激光屈光手术上岗证...'
      },
      {
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551880417230&di=9ec7933372afecbee9fc802d74ec6081&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1606%2F22%2Fc12%2F23207416_1466606519150_mthumb.jpg',
        id:3,
        tit:'屈光不正(近视眼)',
        txt:'艾格眼科屈光手术专科：量眼定制 安全有效 由国内首批持有激光屈光手术上岗证...'
      }
    ]
  },
  //点击列表的id
  clickOne(e){
    let id = e.currentTarget.dataset.id;
    console.log(id)
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