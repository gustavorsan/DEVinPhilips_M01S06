function sleep(valor){
  return new Promise ((resolve,reject)=>{
      setTimeout(resolve,3000,valor);
  })
}



sleep(5).then((val) => console.log(val))