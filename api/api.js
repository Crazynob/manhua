
export const detail = "https://www.zymk.cn/nodeapi/comic/detail";
export const detail2 = "https://www.zymk.cn/nodeapi/comic/chapterInfo";
export const imaList = "https://www.zymk.cn/nodeapi/comic/chapterList";
export const bookList = "https://www.zymk.cn/nodeapi/book/getbookinfo"
export const hotSearch ="https://www.zymk.cn/nodeapi/mixed/hotSearch";
export const search = "https://www.zymk.cn/api/getsortlist/";//?key=%E5%AD%90&topnum=2
export function getData(url,obj){
  return GET(url,obj);
}

function GET(url,obj){
let promise = new Promise(
  (resolve, reject)=>{
    // let result;
    wx.request(
      {
        method: "GET",
        url: url,
        data: obj,
        success(res) {
          if (res.statusCode == 200) {         
            resolve(res.data.data);
          }
        },
        fail(res) {
          console.log(res.data)
        }
      }
    )
  }
);
  return promise;
}

