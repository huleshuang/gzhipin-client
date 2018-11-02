
function getRedirectPath(type,header) {

  let path = '';
  if(type==='boss'){
    path+='/boss'
  }else{
    path+='/dashen'
  }

  if(!header){
    path+='info'
  }

  return path;
}

export default getRedirectPath;