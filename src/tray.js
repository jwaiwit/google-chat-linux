const {Tray, Menu, ipcMain} = require("electron");
const pathsManifest = require("./paths");
const WindowManager = require('./window');
let mainWindow;
let systemTrayIcon;
let currentState;
let iconTicking = 0; 
let blinkIconTimer;

const onShowEntryClicked = () => {
	(! mainWindow.isVisible() || mainWindow.isMinimized()) ? mainWindow.show() : mainWindow.hide();
}

const onSystemTrayIconClicked = () => {
	(! mainWindow.isVisible() || mainWindow.isMinimized()) ? mainWindow.show() : mainWindow.focus();
}

const buildContextMenu = (mainWindow) => {
	const template = [
		{
			"label": "Show/Hide",
			"click": () => {
				onShowEntryClicked();
			},
		}, {
			label: 'Force reload', click: function () {
				WindowManager.onForceReloadClicked();
			}
		}, {
			"label": WindowManager.getIsThemed() ? "Remove theme (restart)" : "Apply theme",
			"click": () => {
				WindowManager.onToggleThemeClicked(mainWindow);
				buildContextMenu();
			}
		}, {
			type: 'separator'
        }, {
			"label": WindowManager.getThirdPartyAuthLoginMode() ? "Regular mode after auth (restart)" : "Use third party auth mode (restart)",
			"click": () => {
				WindowManager.onToggleThirdPartyAuthLoginMode();
				buildContextMenu();
			}
		}, {
			type: 'separator'
        }, {
			"label": "Quit",
			"click": () => {
				WindowManager.onQuitEntryClicked();
			}
		}
	]

	const contextMenu = Menu.buildFromTemplate(template);
	systemTrayIcon.setContextMenu(contextMenu);
	systemTrayIcon.setToolTip(process.title);
	systemTrayIcon.setTitle(process.title);

	systemTrayIcon.on("click", () => {
		onSystemTrayIconClicked();
	});

	return systemTrayIcon;
}

const initializeTray = (windowObj) => {
	systemTrayIcon = new Tray(pathsManifest.ICON_OFFLINE_MSG);
	mainWindow = windowObj;
	mainWindow.webContents.on('dom-ready', () => {
		mainWindow.webContents.executeJavaScript(
			'var ipc;'+
			'try{'+
			' var ipc = require(\'electron\').ipcRenderer;'+ 
			' var fi = document.querySelector("link#favicon256");'+
			' console.log(fi);'+
			' ipc.send("favicon-changed", fi.href);'+
			' var callback = function(mutationList) { ipc.send("favicon-changed", fi.href); };'+
			' var observer = new MutationObserver(callback);'+ 
			' observer.observe(fi, { attributes: true });'+
		    '}catch (e){console.log(e)};');
	});

	return buildContextMenu(mainWindow);

};

const blinkIcon = () => {
	if (blinkIconTimer) {
		clearTimeout(blinkIconTimer);
		blinkIconTimer = null;
	}

	if(currentState != "NORMAL") {
		blinkIconTimer = setTimeout(() => {
			iconTicking++

			if (iconTicking % 2) {
				setIcon(currentState);
			}
			else {
				setIcon("OFFLINE");
			}

			blinkIcon();
		}, 800);
	}
};

ipcMain.on('favicon-changed', (evt, href) => {
	var itype = "";
	if (href.match(/chat-favicon-no-new/)) {
		itype = "NORMAL";
		iconTicking = 0; 
	}else if (href.match(/chat-favicon-new-non-notif/)) {
		itype = "UNREAD";
	}else if (href.match(/chat-favicon-new-notif/)) {
		itype = "ATTENTION";
	}else if (href.match(/^data:image\/png;base64,iVBOR.+/)) {
		itype = "OFFLINE";
	}

	currentState = itype;	
	if (currentState != "NORMAL") {
		blinkIcon();
	}

	setIcon(itype);

});

function iconForType(iconType) {
	if (iconType == "NORMAL") {
		return pathsManifest.ICON_NO_NEW_MSG;
	}else if (iconType == "UNREAD") {
		return pathsManifest.ICON_NEW_NON_NOTIF_MSG;
	}else if (iconType == "ATTENTION") {
		return pathsManifest.ICON_NEW_NOTIF_MSG;
	}
	return pathsManifest.ICON_OFFLINE_MSG;
}

const setIcon = (iconType) => {
	const i = iconForType(iconType)
	try {
		systemTrayIcon.setImage(i);
	}catch (e){
		//do nothing ... fails on some distribs / OS / window managers
		console.log("Failed to update window icon :-(")
		console.log(e)
	}
	WindowManager.updateIcon(i);

	if (iconType == "ATTENTION") {
		WindowManager.setOverlayIcon();
	}else{
		WindowManager.cleanOverlayIcon();
	}
}
	

module.exports = {
	initializeTray: initializeTray
};
