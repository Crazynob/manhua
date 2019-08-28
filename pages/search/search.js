// pages/search/search.js
import { getData, hotSearch,search } from '../../api/api.js'; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hot:[],
    searchData:[],
    searchHistory:[],
    show:false
  },
  onSearch(e){
    console.log(e);
  },
  onInputUpdate(e){
    console.log(e);
    let history = this.data.searchHistory;

    if (e.detail.cursor > 0){
      history.unshift(e.detail.value);
      wx.setStorage({
        key: 'history',
        data: history,
      });

    }


    // ?key =% E5 % AD % 90 & topnum=2
    let opt = {key:e.detail.value};

    getData(search, opt).then((res)=>{
      // console.log(res.key);
      let show = true;
      if(res.key ==""){
        show = false;
      }
      this.setData({
        searchData: res.page.comic_list,
        show:show,
        searchHistory:history
      });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let history =[];

    wx.getStorage({
      key: 'history',
      success: function (res) {
        console.log(res);
        history = res.data;
      }
    });
    getData(hotSearch,{}).then((res)=>{
      res.forEach((e)=>{
        e.id = '/pages/detail/detail?id='+e.comic_id;
        e.name = e.comic_name;
      })
      console.log(res);
      this.setData({
        hot:res,
        searchHistory: history
        })
    });

  
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