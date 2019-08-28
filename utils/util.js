
export function getImagePath(comic_id){

  let promise = new Promise((resolve)=>{

    var result = "";
    var temp;
    for (var i = 1; i < 10; i++) {
      temp = comic_id % 10;
      comic_id = Math.floor(comic_id / 10);
      if (temp >= 1) {
        result = temp + result;
      } else {
        result = "0" + result;
      }
      if (i % 3 == 0) {
        result = "/" + result;
      }
    }
    result = "https://image.zymkcdn.com/file/cover"+result+".jpg-300x400.webp";
    resolve(result);
  });
  return promise;
}

export function getUpdateTime(val){
  let mill = new Date().getTime() - new Date(val).getTime();
  if (mill > 86400000){
    return Math.floor(mill / (1000 * 60 * 60 * 24))+"天前";
  }
  
  return Math.floor(mill / (1000 * 60 * 60))+"小时前";
}


export function addSrc(objList){
  let promise = new Promise((resolve)=>{

    objList.forEach((res) => {
      getImagePath(res.comic_id).then((src) => {
        res.src = src;
      });
    });

    resolve(objList);
  });

  return promise;
}