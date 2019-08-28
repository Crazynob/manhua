// pages/detail/detail.js
import { getData, detail, imaList} from '../../api/api.js'; 
import { getImagePath,getUpdateTime } from '../../utils/util.js';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sub:0,
    sort:true,
    detail:{},
    path:"",
    updateTime:0,
    imgList:[],
    chapter_id:0 //表示当前是第几话
    
  },

  // 标题栏跳转到首页
  toIndex(e) {
    console.log(e);
    wx.reLaunch({
      url: '../../pages/index/index',
      success(e) {
        console.log(e);
      },
      fail(e) {
        console.log(e);
      }
    })
  },
  //选项卡切换
  option(e){
    console.log(e);
    this.setData({
      sub: e.target.dataset.sub
    });
  },
    //选项卡切换
  onSetSub(e){
    console.log(e)
    this.setData(
      {
        sub: e.detail.current
        
      }
    )
  },
  //排序
  onSort(){
   this.setData({
     sort: !this.data.sort,
     imgList: this.data.imgList.reverse()
   })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function (options) {
    // options = { id: 1930};
    getData(detail,options).then
    (
      (res)=>
      {
        this.setData
        (
          {
           
            detail: res
          },
          ()=>{
            console.log(res)
          }
        );


          getImagePath(res['comic_id']).then(
            (resc) => {
               this.setData(
                 { 
                  path: resc,
                  updateTime: getUpdateTime(res['update_time']) 
                 }
               ); 
            });
        
      }
      
    );
    
    getData(imaList,options).then((res) => {
      app.global.imgList = res.reverse();
      let cloneRes = JSON.parse(JSON.stringify(res));
      this.setData({ imgList: cloneRes }, () => { console.log(cloneRes); console.log(app.global.imgList)});
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.detail)
    console.log(this.data.path)

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