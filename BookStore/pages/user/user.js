
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{ID:'5413458', cardNum:'0982 1234 2343 8739', name:'张三'},
    functionList: [{id:'coupon', title:'我的优惠券'}, {id:'order', title:'我的订单'}, 
    { id: 'activity', title: '我的活动' }, { id: 'editUserInfo', title: '修改个人信息' },
    {id:'customService', title:'联系客服'},],
    membercardImage: '../../Picture/membershipCard.png'
  },


  /**
   * 功能页面跳转
   */
  toFunctionPage:function(e){
    var functionName = e.currentTarget.id
    var address = '../' + functionName + '/' + functionName
    wx.navigateTo({
      url: address
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