
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/eui/eui.js",
	"libs/modules/res/res.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/Card.js",
	"bin-debug/CardList.js",
	"bin-debug/tool/view/CiSprite.js",
	"bin-debug/CardView.js",
	"bin-debug/EventDefine.js",
	"bin-debug/tool/CiSingleton.js",
	"bin-debug/tool/CiGameClient.js",
	"bin-debug/GameClient.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/LogicManager.js",
	"bin-debug/Main.js",
	"bin-debug/SingleLogic/SingleClient.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/tool/CiAction.js",
	"bin-debug/tool/CiColor.js",
	"bin-debug/tool/CiUtil.js",
	"bin-debug/tool/utils/CiArray.js",
	"bin-debug/tool/utils/CiArrayT.js",
	"bin-debug/tool/utils/CiRandom.js",
	"bin-debug/tool/utils/CiStaticQueue.js",
	"bin-debug/tool/view/CiLayer.js",
	"bin-debug/tool/view/CiColorLayer.js",
	"bin-debug/tool/view/CiIObject.js",
	"bin-debug/tool/view/CiLayerContainer.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 640,
		contentHeight: 1136,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};