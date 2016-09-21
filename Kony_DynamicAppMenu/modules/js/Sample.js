function onClickMenuItem1(){
alert("Accounts");
frmAccounts.label68508510911966.text="Accounts";
frmAccounts.show();
}

function onClickMenuItem2(){
	alert("Payments");
frmPayments.label68508510911970.text="Payments";
frmPayments.show();
}

function createAppMenu(){
	var appMenuItem1 = ["appmenuitemid1","Accounts", "icon1.png", onClickMenuItem1];
	var appMenuItem2 = ["appmenuitemid2", "Payments", "icon2.png", onClickMenuItem2];
	var appMenu = [appMenuItem1, appMenuItem2];
	kony.application.createAppMenu("SampleAppMenu", appMenu, null, null);
	kony.application.setCurrentAppMenu("SampleAppMenu");
}

/*flag = true;

function changeFocus(){
	if(flag){
		kony.application.setAppMenuFocusByID("appmenuitemid2");
	}else{
		kony.application.setAppMenuFocusByID("appmenuitemid1");	
	}
}**/