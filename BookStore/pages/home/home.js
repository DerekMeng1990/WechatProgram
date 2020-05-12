/*首页JS */
const app = getApp()
Page({
  data: {
    userInfo:{},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    marginTop: 0,
    //eventList数据需要从后台获取
    eventList: [
      {image: '', date: '4月21日  星期五 13:30', title: '医学生！你不知道的5件事情',location: '甘棠树下 内蒙古大学ABC校区店'},
      {image: '', date: '4月21日  星期五 13:40', title: '医学生！你不知道的5件事情', location: '甘棠树下 内蒙古大学ABC校区店' }
      ],
    //carouselList数据需要从后台获取
    carouselList:['',''],
    isMember: true,
    loginPicture:'../../Picture/login.png',
    normalShoppingButton:'../../Picture/normalShopping.png',
    dialogShow: false,
    button: [{text: '确定'}],
    dialogContent: {title: '', date: ''}
  },
  
  /** 
    * 购物夜跳转
    * @example 
    * 先判定用户有没有登陆，false--> 登陆提示
    * 然后判定登陆用户是不是会员，false --> 跳转到注册页面 
    */
  toShoppingPage: function(){
    var isMember = this.data.isMember
    if(isMember){
      wx.navigateTo({
        url: '../shopping/shopping'
      })
    }
    else{
      wx.navigateTo({
        url: '../editUserInfo/editUserInfo'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        marginTop: 10
      })
    }else if (this.data.canIUse){
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          marginTop: 10
        })
      }
    }else{
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            marginTop: 10
          })
        }
      })
    }
  },

  getUserInfo: function(e){
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo:true,
      marginTop: 10
    })
  },

  /**
   * 点击立即报名触发弹窗
   * @param e: 点击对应事件
   */
  signUp: function(e){
    var id = e.currentTarget.dataset.id
    let eventList = this.data.eventList
    let dialogContent = this.data.dialogContent
    dialogContent.title = eventList[id].title
    dialogContent.date = eventList[id].date
    this.setData(
      {dialogContent: dialogContent,
       dialogShow:    true})
  },


  /**
   * 点击弹窗确定触发相应功能
   * @param e: 点击对应事件
   */
  tapDialogButton: function(e){
    this.setData({dialogShow: false})
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