// pages/DoctorIntro/DoctorIntro.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex:0,
    tabs:[
      {
        id:0,
        name:'屈光不正'
      },
      {
        id:1,
        name:'屈光不正'
      },
      {
        id:2,
        name:'屈光不正'
      },
      {
        id:3,
        name:'屈光不正'
      },
      {
        id:0,
        name:'屈光不正'
      },
      {
        id:1,
        name:'屈光不正'
      },
      {
        id:2,
        name:'屈光不正'
      },
      {
        id:3,
        name:'屈光不正'
      },
      {
        id:0,
        name:'屈光不正'
      },
      {
        id:1,
        name:'屈光不正'
      },
      {
        id:2,
        name:'屈光不正'
      },
      {
        id:3,
        name:'屈光不正'
      },
      {
        id:0,
        name:'屈光不正'
      },
      {
        id:1,
        name:'屈光不正'
      },
      {
        id:2,
        name:'屈光不正'
      },
      {
        id:3,
        name:'屈光不正'
      },
      {
        id:0,
        name:'屈光不正'
      },
      {
        id:1,
        name:'屈光不正'
      },
      {
        id:2,
        name:'屈光不正'
      },
      {
        id:3,
        name:'屈光不正'
      },
      {
        id:0,
        name:'屈光不正'
      },
      {
        id:1,
        name:'屈光不正'
      },
      {
        id:2,
        name:'屈光不正'
      },
      {
        id:3,
        name:'屈光不正'
      },
      {
        id:0,
        name:'屈光不正'
      },
      {
        id:1,
        name:'屈光不正'
      },
      {
        id:2,
        name:'屈光不正'
      },
      {
        id:3,
        name:'屈光不正'
      },
      {
        id:0,
        name:'屈光不正'
      },
      {
        id:1,
        name:'屈光不正'
      },
      {
        id:2,
        name:'屈光不正'
      },
      {
        id:3,
        name:'屈光不正'
      },
      {
        id:0,
        name:'屈光不正'
      },
      {
        id:1,
        name:'屈光不正'
      },
      {
        id:2,
        name:'屈光不正'
      },
      {
        id:3,
        name:'屈光不正'
      },
      {
        id:0,
        name:'屈光不正'
      },
      {
        id:1,
        name:'屈光不正'
      },
      {
        id:2,
        name:'屈光不正'
      },
      {
        id:3,
        name:'屈光不正'
      },
    ],
    conts:[
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      {
        id:0,
        image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529857188,3242176299&fm=26&gp=0.jpg',
        name:'尹禾',
        rz: '副主任医师',
        xq: '武汉艾格眼科医院屈光手术科主任，瑞士STAAR全球ICL手术医师认证专家，湖北省激光医学会委员...',
      },
      
    ]
  },
  tabClick(e){
    let {id,index} = e.currentTarget.dataset;
    console.log(id,index)
    this.setData({
      tabIndex:index
    })
  },
  contClick(e){
    let {id} = e.currentTarget.dataset;
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