function removeUrlAnchor(url){
  let result = ''
 for (let i = 0; i < url.length ; i++ ) {
   if (url[i] === "'"){ 
     i = i + 1
   }
   else if (url[i] === '#') {
     return result
   }
   result += url[i]
   console.log(result)
   
 }
 return result
}
