// for(var i=0;i<8;i++){
//     //continue和break
//     if(i==4){
//         // continue;
//         // alert(23);
//         break;//0,1,2,3
//     }
//     console.log(i);
// }
// var i=0;
// do{
//     document.write(i+"<br/>");
//     i++;
// }while(i<3);
//窗口加载完成之后加载
window.onload=function(){
    var ulDom= document.getElementById("list");
    var liDoms= ulDom.getElementsByTagName("li");

    ulDom.innerHTML="<li>1</li><li>2</li>";
    liDoms[0].onclick=function(){
        alert("hello");
    };
  //  alert(Array.isArray(liDoms));
    //只能对liDoms里面的每个li加onClick事件
    for(let i=0;i<liDoms.length;i++){
        liDoms[i].onclick=function(){
            alert(i);
        }
    }
   

}
