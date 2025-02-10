function clickon(){
   alert("تم الارسال \n نحن في خدمتكم");
}
function mouseover(){
    document.b1.src="meatprost.jpg";
}
function mouseout(){
    document.b1.src="m.jpg";
}
function changediv1(){
var id=document.getElementById('div11');
id.className="div1";
}
function changediv2(){
    var id=document.getElementById('div11');
    id.className="div2";}
function information(){
    var name=form.namme.value;
    var email=form.email.value;
    var message=form.message.value;
    document.alert("<h4 style='color:red;'>الاسم:"+name+"</h4>"); 
    document.alert("<h4 style='color:red;'>email"+email+"</h4>");
    document.alert("<h6 style='color:red;'>الرسالة"+message+"</h6>");

}












/*function changefiled(){
    window.status=('انت غيرت الحقل!!!!');return true;
}*/
/*function upppercase(){
    var y=document.getElementById("name").value ;
    document.getElementById("name").value=y.toUppercase();
}*/
/*function reset(){
    alert("النموذج قمت باعادته كما كان");
}*/

/*function checkcookies(){
    
    if(navigator.cookieEnabled==true){
        alert("اهلا بك في موقعنا \n نستعمل ملفات تعريف الارتباط");
    }else{
        alert("اهلا بك في موقعنا \nلا نستعمل ملفات تعريف الارتباط");
}*/









/*// let header = document.querySelector('header');
 //window.addEventListener('scroll',() => {
//header.classList.toggle('active',window.scrollY > 0);
 });*/
 