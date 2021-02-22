const {app} = require('electron');
const WindowManager = require('./window');
const TrayManager = require('./tray');
const KeyboardManager = require('./keyboard');
const ConfigManager = require('./configs');
const ContextMenu = require('./contextmenu');
const applicationVersion = require('./../package.json').version;
let mainWindow, systemTrayIcon, config, contextMenu;

process.env.NODE_OPTIONS="--no-force-async-hooks-checks";
process.env.ELECTRON_DISABLE_SANDBOX=true;

process.title = 'Google Chat Linux (Unofficial)';
console.log(process.title + ' - v' + applicationVersion);
console.log('Node.js runtime version:', process.version);

const initialize = () => {
	app.allowRendererProcessReuse = true;
	
	app.commandLine.appendSwitch('force-color-profile', 'srgb');
	app.commandLine.appendSwitch('disable-features', 'ColorCorrectRendering');
	app.commandLine.appendSwitch('disable-color-correct-rendering');

	config = ConfigManager.loadConfigs();
	
	if(!mainWindow) {
		mainWindow = WindowManager.initializeWindow(config);
	}	
	
	if(!contextMenu) {
		contextMenu = ContextMenu.initializeContextMenu(mainWindow);
	}

	if(!systemTrayIcon) {
		systemTrayIcon = TrayManager.initializeTray(mainWindow, config);
	}

	if (WindowManager.getEnableKeyboardShortcuts()) {
		KeyboardManager.registerKeyboardShortcuts(mainWindow);
	}
	
};

app.on("ready", initialize);
app.on("activate", initialize);
