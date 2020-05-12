
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navList: [{navName: '已报名', id: 0}, {navName: '已参加', id: 1}],
    //数据需要从后台数据库获取
    eventList: [
    {date: '05月10日 星期五 13:30', title: '医学生! 你不知道的5件事情', 
    location: '甘棠树下 内蒙古大学ABC校区', id: 0, display: '', checked: false, index: 0},
    {date: '05月09日 星期五 13:40', title: '医学生! 你不知道的5件事情', 
    location: '甘棠树下 内蒙古大学ABC校区', id: 0, display: '', checked: false, index: 1},
    { date: '06月01日 星期天 13:40', title: '医学生! 你不知道的5件事情',
    location: '甘棠树下 内蒙古大学ABC校区', id: 0, display: '', checked: false, index: 2},
    {date: '06月01日 星期天 13:40', title: '医学生! 你不知道的5件事情',
    location: '甘棠树下 内蒙古大学ABC校区', id: 0, display: '', checked: false, index: 3}],
    activityTitleList:[{titleName: '活动名称'}, {titleName: '活动时间'}, {titleName: '活动地点'}],
    disabled: true,
    checkNum: 0
  },

  /**
   * 点击导航栏切换相应的活动列表
   * @param e: 点击事件
   */
  switchNav: function(e){
    var id = e.currentTarget.id
    this.setData({currentTab: id})
    this.activityShow(id)
  },

  /**
   * 更新对应id的活动列表
   * @param id: 导航栏获取的对应id
   * @example   0 --> 已报名
   *            1 --> 已参加
   */
  activityShow: function(id){
    let eventList = this.data.eventList
    for(var index in eventList){
      if(eventList[index].id != id){
        eventList[index].display = 'none'
      }
      else{
        eventList[index].display = ''
      }
    }
    this.setData({eventList: eventList})
  },

  /**
   * 检测活动是否已经过期
   * @example 如果当前时间大于活动设定时间 --> 活动过期
   */
  checkexpireDate: function(){
    let currentDate = this.dateCombination()
    let eventList = this.data.eventList
    for(var index in eventList){
      var combination = ''
      var date = eventList[index].date
      let month = date.substring(0, 2)
      let day = date.substring(3, 5)
      let hour = date.substring(11, 13)
      let minute = date.substring(14)
      combination = combination + month + day + hour + minute
      combination = parseInt(combination)
      console.log(currentDate)
      console.log(combination)
      if(currentDate > combination){
        eventList[index].id = 1
        eventList[index].display = 'none'
      }
    }
    this.setData({eventList:eventList})
  },

  /**
   * 组合当前时间
   * @return 根据当前时间组合好的一个数字
   * @exampl 5月11日 15:44 --> 5111544
   */
  dateCombination: function(){
    var currentDate = new Date()
    var combination = ''
    let month = currentDate.getMonth() + 1
    let day = currentDate.getDate()
    let hour = currentDate.getHours()
    let minute = currentDate.getMinutes()
    combination = combination + this.timeFormat(month) + this.timeFormat(day) + this.timeFormat(hour) + 
    this.timeFormat(minute) 
    combination = parseInt(combination)
    return combination
  },

  /**
   * 时间格式
   * @param val: 输入的月/日/小时/分钟
   * @example    输入<10 在前面添加一个0
   *             1 --> 01
   */
  timeFormat: function(val){
    if(val < 10){
      val = '0' + val
    }
    return val
  },

  /**
   * 点击选中触发
   * @param e: 选中事件
   */
  checked: function(e){
    var index = e.currentTarget.dataset.position
    let checkNum = this.data.checkNum
    let eventList = this.data.eventList
    if(eventList[index].checked == false){
      eventList[index].checked = true
      checkNum += 1
    }
    else{
      eventList[index].checked = false
      checkNum -= 1
    }
    this.setData({
      checkNum : checkNum,
      eventList: eventList
    })
    this.buttonAvailable()
  },

  /**
   * 检查取消预约按钮是否可用
   * @param checkNum: 选中个数
   */
  buttonAvailable: function(){
    let checkNum = this.data.checkNum
    if(checkNum != 0){
      this.setData({disabled: false})
    }
    else{
      this.setData({disabled: true})
    }
  },

  /**
   * 点击取消预约按钮触发
   */
  cancle: function(){
    let eventList = this.data.eventList
    for(var index in eventList){
      if(eventList[index].checked == true){
        eventList[index].display = 'none'
      }
    }
    this.setData({
      eventList: eventList,
      checkNum: 0
      })
    this.buttonAvailable()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.checkexpireDate()
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
    //this.checkexpireDate()
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