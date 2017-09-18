import dataJson from '../../assets/data/data.json'
import {getCookie} from '../../assets/js/cookie.js'

//处理请求数据
export function postData(info){
  var username = info.username||"";
  var password = info.password||"";
  var data = dataJson.users;
  if(getCookie(username)){
    data.push({"id":data.length,"username":username,"password":getCookie(username),"isVip":0})
  }
  var res = ""
  for(let i=0;i<data.length;i++){
    if(data[i].username == username){
      if(data[i].password == password){
        if(data[i].username == "admin"){
          res = "admin";
          break;
        }else if(data[i].username == "test"){
          res = "test";
          break;
        }else{
          res = "others";
          break;
        }
      }else{
        res = 0;
        break;
      }
    }else{
      res = -1;
    }
  }
  return res;
}
export function getData(){
  var res = dataJson.users;
  return res;
}
