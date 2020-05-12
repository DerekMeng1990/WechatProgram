
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //需要从数据库获取数据
    couponList: [{ couponName: '指定烘培产品买一送一', expireDate: '2020年4月09日', 
    image:'../../Picture/coffee.png', space:1, disabled:false},
    { couponName: '指定烘培产品买一送一', expireDate: '2020年4月09日',
    image: '../../Picture/coffee.png', space: 2, disabled: false},
    { couponName: '指定烘培产品买一送一', expireDate: '2020年4月09日',
    image: '../../Picture/coffee.png', space: 3, disabled: false}]
  },

  /**
   * 点击立即使用跳出确认对话框
   * @return true --> 调用use方法
   */
  confirmModal: function(e){
    var that = this
    wx.showModal({
      title: '确认使用优惠券',
      content: '此优惠券将无法重复使用',
      success (res) {
        if(res.confirm){
          var index = e.target.id - 1
          that.use(index)
        }
      }
    })
  },

  /**
   * 使用优惠券
   * @param index: 0 --> 第一个优惠券，以此类推
   */
  use: function(index){
    let couponList = this.data.couponList
    couponList[index].disabled = true
    this.setData({couponList:couponList})
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