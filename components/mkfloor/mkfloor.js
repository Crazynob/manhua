// components/mkfloor/mkfloor.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value: ""
    },
    summary:String,
    arr:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
   
    config:{
      "displayMultipleItems":3,//
      "currentItemId":0,//
      nextMargin:"50rpx",
      previousMargin:"20rpx"
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetails(e){
      console.log(e);
      let comic_id  = e.target.dataset.cid;
      if (comic_id){
        wx.navigateTo({
          url: '/pages/detail/detail?id=' + comic_id,
        })
      }
    }
  }
})
