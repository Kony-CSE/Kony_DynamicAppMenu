//Form JS File
function frmHome_frmHome_preshow_seq0(eventobject) {
    createAppMenu.call(this);
};

function frmHome_label6850803439254_onTouchEnd_seq0(eventobject, x, y, contextInfo) {
    changeFocus.call(this);
};

function addWidgetsfrmHome() {
    var label6850803439254 = new kony.ui.Label({
        "id": "label6850803439254",
        "top": "26.0%",
        "width": "46.89%",
        "height": "26dp",
        "centerX": "25.56%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Hello",
        "onTouchEnd": frmHome_label6850803439254_onTouchEnd_seq0,
        "skin": "lblNormal",
        "enableCache": false
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var lbl = new kony.ui.Label({
        "id": "lbl",
        "top": "186dp",
        "left": "97dp",
        "width": "208dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "lblNormal",
        "enableCache": false
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmHome.add(
    label6850803439254, lbl);
    frmHome.setDefaultUnit(kony.flex.DP);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmHome_frmHome_preshow_seq0,
        "enableCache": false,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "maxAppMenuButtons": 4,
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["label6850803439254", "lbl"]
    });
};