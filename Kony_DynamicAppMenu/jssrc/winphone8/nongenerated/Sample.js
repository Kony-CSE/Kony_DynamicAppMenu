function onClickMenuItem1() {
    kony.print("Accounts");
    frmHome.lbl.text = "Accounts";
}

function onClickMenuItem2() {
    kony.print("Payments");
    frmHome.lbl.text = "Payments";
}

function createAppMenu() {
    var appMenuItem1 = ["appmenuitemid1", "Accounts", "icon1.png", onClickMenuItem1];
    var appMenuItem2 = ["appmenuitemid2", "Payments", "icon2.png", onClickMenuItem2];
    var appMenu = [appMenuItem1, appMenuItem2];
    kony.application.createAppMenu("SampleAppMenu", appMenu, null, null);
    kony.application.setCurrentAppMenu("SampleAppMenu");
}
flag = true;

function changeFocus() {
    if (flag) {
        kony.application.setAppMenuFocusByID("appmenuitemid2");
    } else {
        kony.application.setAppMenuFocusByID("appmenuitemid1");
    }
}