import { getData, bookList} from '../../api/api.js'; 
import {addSrc} from '../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,//当前对应轮播图的current
    images: ["/image/banner1.webp", "/image/banner2.webp","/image/banner3.webp"],//banner 对应的数据
    arr: [],
    book_name:[]
  },
  // 点击搜索图标触发,跳转到搜索页面
  onSearch(e){
    console.log(e);
  },
  // 点击跳转到此banner漫画对应的详情页
  toDetails(e){
    console.log(this.data.index);

  },
  // 设置banner当前滑动到那个页面
  onChange(e){
    console.log(e);
    if (e.detail.source === "touch"){
      this.setData({
        index: e.detail.current
      });
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
    let arr = [];
    let book_name=[];

    for(let i=1 ;i<9 ;i++){
      getData(bookList, { book_id:i}).then((res) => {
        addSrc(res.book_list).then((result) => {
          arr.push(result);
          book_name.push(res.book_name);
          if(i==8){
            this.setData(
              {
                arr: arr,
                book_name: book_name
              }
            );
          }
        });
      });
  
    }
    console.log(arr);
    
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