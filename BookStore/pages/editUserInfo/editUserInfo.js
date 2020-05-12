
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentList: [{ contentName: '学校'}, { contentName: '专业'}, { contentName: '年级'}, { contentName: '班级'}, 
      { contentName: '宿舍号'}, { contentName: '寝室号'}, { contentName: '电话'}],
    inputValue: [],
    //从数据库获取
    adapterSchoolSource:['内蒙古医科大学','北京大学','清华大学'],
    //从数据库获取
    adapterMajorSource:['语文','数学','英语'],
    pickerList:['大一','大二','大三','大四'],
    bindSource:[],
    hidden:true,
    contentId: 0,
    top:0,
    placeholderList: ['例:内蒙古医科大学', '例:临床学', '例:大一', '例:1班', '例:1幢', '例:101','例:XXX-XXXX-XXXX'],
    dialogShow: false,
    buttons: [{text:'取消'}, {text:'提交'}]
  },

  /**
   * 监控有内容输入到input触发
   * 显示对应的模糊搜索页面
   */
  bindinput: function(e){
    let inputValue = this.data.inputValue
    var contentId = e.target.id
    var prefix = e.detail.value
    var newSource = []
    var top = 257 + 120 * contentId
    this.setData({
      contentId: contentId,
      top:       top})
    if(prefix != ""){
      if(contentId == 0){
        this.data.adapterSchoolSource.forEach(function(e){
          if(e.indexOf(prefix) != -1){
            newSource.push(e)
          }
        })
      }
      else if (contentId == 1) {
        this.data.adapterMajorSource.forEach(function (e) {
          if (e.indexOf(prefix) != -1) {
            newSource.push(e)
          }
        })
      }
    }
    this.checkSourceLength(newSource)
  },

  /**
   * 检测模糊搜索列表是否为空
   * @prarm newSource: 模糊搜索列表
   * @example !=0 --> 给模糊搜索列表付值，并且显示
   *          ==0 --> 重制bindSource，并且隐藏模糊搜索列表
   */
  checkSourceLength: function(newSource){
    if(newSource.length != 0){
      this.setData({
        bindSource: newSource,
        hidden:     false
      })
    }
    else{
      this.setData({
        bindSource: [],
        hidden:     true
      })
    }
  },

  /**
   * 监控光标离开输入框触发
   * @prarm e: 光标离开触发事件
   */
  bindblur: function(e){
    var prefix = e.detail.value
    var id = e.target.id
    let inputValue = this.data.inputValue
    inputValue[id] = prefix
    this.setData({inputValue:inputValue})
  },

  /**
   * 点击选择模糊搜索列表中的选项
   * @prarm e: 点击事件
   */
  itemTap: function(e){
    var id = e.target.dataset.id
    let inputValue = this.data.inputValue
    inputValue[id] = e.target.id
    this.setData({
      inputValue: inputValue,
      bindSource: [],
      hidden: true
    })
  },

  /**
   * 滚动选择
   * @prarm e: 选择事件
   */
  bindPickerChange: function(e){
    let inputValue = this.data.inputValue
    let pickerList = this.data.pickerList
    var id = e.target.dataset.id
    var pickerIndex = e.detail.value
    inputValue[id] = pickerList[pickerIndex]
    this.setData({inputValue: inputValue})
  },

  /**
   * 提交功能
   * @exampe 信息不完整 --> 提示补全信息
   *         信息完整   --> 显示弹窗显示全部数据并提示是否提交
   */
  submitInfo: function(){
    let inputValue = this.data.inputValue
    if(inputValue.length != 7){
      wx.showToast({
        title: '请补充全部信息',
        icon: 'none',
        duration: 3000
      })
    }
    else{
      for(var index = 0; index < inputValue.length; index++){
        if(inputValue[index] == null || inputValue[index] == ""){
          wx.showToast({
            title: '请补全全部信息',
            icon: 'none',
            duration: 3000
          })
          return
        }
      }
      this.setData({dialogShow: true})
    }
  },

  /**
   * 点击弹窗按钮隐藏弹窗
   * @prarm e: 点击事件
   */
  tapDialogButton: function(e){
    this.setData({dialogShow: false})
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