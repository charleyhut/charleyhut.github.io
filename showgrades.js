var failCnt=0;
var f22validated=false;
function validatef22(){
	if(failCnt>3){
		window.alert('Too many requests!');
		return;
	}
	if(f22validated){
		document.getElementById('f22').innerHTML='GPA: 2.96/4.00 <br/><li> Rank: 1087/1371 <br/> Click <a style="color: blue;" onclick="cancelf22()">here</a> to hide the content.';
		return;
	}
	var pswd=window.prompt('Enter password to check grades for 2022 Fall');
	if(pswd=='adminf22validated'){
		f22validated=true;
		document.getElementById('f22').innerHTML='GPA: 2.96/4.00 <br/><li> Rank: 1087/1371 <br/> Click <a style="color: blue;" onclick="cancelf22()">here</a> to hide the content.';
	}
	else if(pswd==null){
		return;
	}
	else{
		window.alert('Wrong password!');
		failCnt+=1;
	}
	return;
}
function cancelf22(){
	document.getElementById('f22').innerHTML=' Privileged information, please click <a style="color: blue;" onclick="validatef22()">here</a> and input password to gain access.';
}
function getQueryString(name){
	var reg=new RegExp('(^|&)'+name+'=([^&]*)(&|$)','i');
	var r=window.location.search.substr(1).match(reg);
    if (r!=null) {
        return unescape(r[2]);
    }
    return null;
}
document.onkeydown = function(){

    if(window.event && window.event.keyCode == 123) {
        //alert("F12被禁用");
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 13) {
        window.event.keyCode = 505;
    }
    if(window.event && window.event.keyCode == 8) {
        //alert(str+"\n请使用Del键进行字符的删除操作！");
        window.event.returnValue=false;
    }

}
document.oncontextmenu = function (event){
	if(window.event){
		event = window.event;
	}
	try{
		var the = event.srcElement;
		if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
			return false;
		}
		return true;
	}catch (e){
		return false;
	}
}
