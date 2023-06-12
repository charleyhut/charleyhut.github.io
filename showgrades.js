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