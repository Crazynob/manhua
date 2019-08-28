// pages/reading/reading.js
const app = getApp();
import { getData,imaList} from '../../api/api.js'; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //漫画详细信息的集合 多少话 每一话对应的地址 和每一话有多少张图片
    //{chapter_id: 54027,chapter_name:"1话",create_time:"2017-11-07T08:26:46.393Z", chapter_addr: "X/寻找前世之旅流年转/第01话开端（上）/",start_var: 1}
    imgList: [],
    //当前已浏览 话的集合
    chapter_list:[],
    //每一画有多少张图片的集合 和 chapter_list集合 一 一对应 是个二维数组
    end:[],
    //记录当前在第几话
    chapter_id:0,
    //这部漫画的最后一话的ID
    last_chapter:0,
    //当前话对应的数组下标
    sub:0,
    //当前漫画总共有多少话
    length:0,
    //漫画页菜单栏是否显示
    hidden:true,
    pageCount:0,
    currentPage:0
  },
  //向上翻页
  onUpper(){
    let firstId = this.data.imgList[0].chapter_id;
    console.log(firstId+"------------"+this.data.chapter_id);
    if (this.data.chapter_id == firstId) {
      return
    }

    let sub = this.data.sub - 1;
    let preId = this.data.imgList[sub].chapter_id;

    let arr = [this.data.imgList[sub]];
    let end = new Array(arr[0].end_var).fill(1);

    end = [end, ...this.data.end];
    arr = [ ...arr,...this.data.chapter_list];

    this.setData({
      chapter_list: arr,
      chapter_id: preId,
      end: end,
      sub: sub
    });
  },
    //向下翻页
  onLower:function(e){
   
    let len = this.data.length;
    console.log("lenght"+len);
    let lastId = this.data.imgList[len - 1].chapter_id;
    if (this.data.chapter_id == lastId) {
      return
    }

    let sub = this.data.sub + 1;
    let afterId = this.data.imgList[sub].chapter_id;

    let arr = [this.data.imgList[sub]];
    let end = new Array(arr[0].end_var).fill(1);

    end = [...this.data.end, end];
    arr = [...this.data.chapter_list, ...arr];

    this.setData({
      chapter_list: arr,
      chapter_id: afterId,
      end: end,
      sub: sub
    });
  },
  onHidden(e){
    console.log("onShow");
    this.setData({
      hidden: !this.data.hidden
    })
  },
  getChapter(){
    let sub = this.data.sub;
    let currentObj = this.data.imgList[sub];
    let chapter = currentObj.chapter_name;
    let pages = currentObj.end_var;

  },
  onScroll(e){
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let imglist = JSON.parse(JSON.stringify(app.global.imgList));
    let length = imglist.length;

    let sub = -1;
    let chapter_id = +options.chapter_id;

    for(let item of imglist){
      sub++;
      if (item.chapter_id === chapter_id) {
        break;
      }
    }

    let len = [new Array(+options.end).fill(1)];
    this.setData({
      chapter_list: [options],
      end: len,
      chapter_id: +options.chapter_id,
      imgList: imglist,
      sub: sub,
      length: length
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(this.data.imgList)
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