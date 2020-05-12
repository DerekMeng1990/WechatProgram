
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //从数据库获取信息
    orderDetailList: [{ itemName: '生命之书', itemAuthor: 'Stuldsosy sleal', itemOriginalPrice: 49, 
    itemMemberPrice: 29},
    { itemName: '生命之书', itemAuthor: 'Stuldsosy sleal', itemOriginalPrice: 49, itemMemberPrice: 29}],
    totalMemberPrice:0,
    totalOriginalPrice:0,
    savePrices:0,
    //从数据库获取信息
    orderInfoList: { orderNum:'8798373628', orderDate:'2020-03-07'},
    //从数据库获取信息
    recieveInfoList: { recieveName: '陈女士', phoneNum: '13389857467', address:'杭州市西湖区百家园路45号'}
  },

  /**
   * 生命周期函数--监听页面加载
   * 计算会员总价，原始总价，节省总价付值
   */
  onLoad: function (options) {
    var memberPrices = 0
    var originalPrices = 0
    var savePrice = 0
    let orderDetailList = this.data.orderDetailList
    for(var index = 0; index < orderDetailList.length; index++){
      memberPrices += orderDetailList[index].itemMemberPrice
      originalPrices += orderDetailList[index].itemOriginalPrice
    }
    savePrice = originalPrices - memberPrices
    this.setData({
      totalMemberPrice:memberPrices,
      totalOriginalPrice:originalPrices,
      savePrices:savePrice
    })
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