
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //后台获取会员信息
    memberInfo: {ID: '5413458', cardNum: '1234 2348 8739 5421', name: '张三'},
    isMember: false,
    privilegeContentList: [{ image: '../../Picture/lowPrice.png', title:'全网最低教科书价格'},
      { image: '../../Picture/discount.png', title: '文具书本双倍折扣' }, { image:'../../Picture/class.png',
        title:'精品课程优惠'}, {image:'../../Picture/coupon.png', title:'海量零食优惠券'}],
    membercardImage: '../../Picture/membershipCard.png'
  },

  /**
   * 跳转到支付界面
   * @example
   * 判断是否是会员 false --> 跳转到注册界面
   */
  toPaymengPage: function(){
    var isMember = this.data.isMember
    if(isMember == false){
      wx.navigateTo({
        url: '../editUserInfo/editUserInfo',
      })
    }
    else{

    }
  },

  /**
   * 跳转到全部特权页面
   */
  toTotalPrivilegesPage: function(){
    wx:wx.navigateTo({
      url: '../totalPrivileges/totalPrivileges'
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