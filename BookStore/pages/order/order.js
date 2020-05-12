Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navList:[{navName:'代发货', id:'0'}, {navName:'代收货', id:'1'}, {navName:'已收货', id:'2'}],
    //数据需要从后台数据库获取
    orderList:[{id:'0', orderNum:'8798373628', date:'2020-03-07', totalPrice:58, 
    shippingFee:'0.00', hidden:false, disabled:false, unique:0}, 
    {id:'1', orderNum:'8798373629', date:'2020-03-06', totalPrice:58,
    shippingFee: '0.00', hidden:true,disabled:false, unique:1}, 
    {id:'2', orderNum:'8798373630', date:'2020-03-05', totalPrice:58,
    shippingFee:'0.00', hidden:true, unique:2}]
  },

  /**
   * 点击导航栏产生相对应的选中状态和订单列表
   * @param e: 点击对应的点击事件
   */
  switchNav: function(e){
    var id = e.currentTarget.id
    this.setData({currentTab:id})
    this.orderShow(id)
  },

  /**
   * 显示对应订单列表
   * @param id: 1 --> 代发货
   *            2 --> 代收货
   *            3 --> 已收货
   */
  orderShow: function(id){
    let orderList = this.data.orderList
    for(var index in orderList){
      if(orderList[index].id != id){
        orderList[index].hidden = true
      }
      else{
        orderList[index].hidden = false
      }
    }
    this.setData({orderList:orderList})
  },

  /**
   * 点击订单详情跳转到订单详情页面
   */
  toOrderDetailPage: function(){
    wx.navigateTo({
      url: '../orderDetail/orderDetail'
    })
  },

  /**
   * 点击提醒发货 || 确认收货按钮，显示不可用并且刷新订单列表
   */
  click:function(e){
    let orderList = this.data.orderList
    var index = e.target.dataset.unique
    orderList[index].disabled = true
    this.setData({orderList:orderList})
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