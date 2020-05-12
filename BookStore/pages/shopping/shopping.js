const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    hasUserInfo: false,
    //bookList从后台获取数据
    bookList: [{ bookImage: '', bookName: '生命之书', bookAuthor:'Stuldsosy sleol',memberPrice:17, 
      originalPrice: 29.00, index: 0, checked: false},
    { image: '', bookName: '生命之书', bookAuthor: 'Stuldsosy sleol', memberPrice: 17, 
      originalPrice: 29.00, index: 1, checked: false}],
    totalPrice: 0,
    disabled: true,
    allPick: {checked:false},
    circleImage: '../../Picture/circle.png'
  },
  
  /**
   * 点击选中和非选中切换
   * @param e: 点击选中事件
   */
  checked:function(e){
    var index = e.currentTarget.id
    var checked = e.currentTarget.dataset.checked
    let bookList = this.data.bookList
    if(checked == false){
      bookList[index].checked = true
    }
    else{
      bookList[index].checked = false
    }
    this.setData({bookList:bookList})
    this.clearOrAllPick()
    this.getTotalPrice()
  },

  /**
   * 控制全选还是非全选
   * @exmple 如果图书列表所有的物品的每一个都点击，全选按钮自动亮起。
   *         如果全选按钮亮起，图书列至少一个选中取消，全选按钮取消选中。
   */
  clearOrAllPick: function(){
    let allPick = this.data.allPick
    let bookList = this.data.bookList
    var boolean = true
    if(allPick.checked == true){
      allPick.checked = false
    }
    else{
      for(var index = 0; index < bookList.length; index++){
        if(bookList[index].checked == false){
          boolean = false
        }
      }
      if(boolean == true){
        allPick.checked = true
      }
    }
    this.setData({allPick: allPick})
  },
  
  /**
   * 全选和非全选切换
   * @param e: 全选事件
   */
  allPickOpertaion: function(e){
    let allPick = this.data.allPick
    var checked = e. currentTarget.dataset.checked
    if(checked == false){
      allPick.checked = true
    }
    else{
      allPick.checked = false
    }
    this.setData({allPick: allPick,})
    this.allPickItems(checked)
  },

  /**
   * 每件物品选中
   * @exmaple 如果点击全选，所有物品自动选中。
   *          如果取消全选，所有物品取消选中。
   */
  allPickItems: function(checked){
    let bookList = this.data.bookList
    for(var index = 0; index < bookList.length; index++){
      if(checked == true){
        bookList[index].checked = false
      }
      else{
        bookList[index].checked = true
      }
    }
    this.setData({bookList: bookList})
    this.getTotalPrice()
  },

  /**
   * 按照选中商品，计算总价。
   */
  getTotalPrice: function() {
    let bookList = this.data.bookList
    var total = 0
    for(let index =0; index<bookList.length; index++){
      if(bookList[index].checked){
        total += bookList[index].memberPrice
      }
    }
    this.setData({totalPrice: total})
    if(total != 0){
      this.setData({disabled:false})
    }
    else{
      this.setData({disabled:true})
    }
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
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