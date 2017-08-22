function ajax({url,method='GET',async=true,data={},headers={}}){
  return new Promise(function(resolve,reject){
    let xhr = new XMLHttpRequest();
    xhr.open(method,url,async);
    xhr.responseType = 'json';
    xhr.onload=function(){
      resolve(xhr.response);
    };
    if(method=='POST')
      xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify(data));
  });
}
export  {ajax}
