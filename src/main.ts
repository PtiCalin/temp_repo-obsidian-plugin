import { App, Plugin, PluginSettingTab, Setting, Notice } from 'obsidian';

interface SamplePluginSettings {
mySetting: string;
}

const DEFAULT_SETTINGS: SamplePluginSettings = {
mySetting: 'default'
};

export default class SamplePlugin extends Plugin {
settings: SamplePluginSettings;

async onload() {
console.log('Loading plugin ' + this.manifest.id);
await this.loadSettings();

this.addCommand({
id: 'sample-command',
name: 'Sample Command',
callback: () => new Notice('Sample command triggered'),
});

this.addSettingTab(new SampleSettingTab(this.app, this));
}

onunload() {
console.log('Unloading plugin ' + this.manifest.id);
}

async loadSettings() {
this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
}

async saveSettings() {
await this.saveData(this.settings);
}
}

class SampleSettingTab extends PluginSettingTab {
plugin: SamplePlugin;

constructor(app: App, plugin: SamplePlugin) {
super(app, plugin);
this.plugin = plugin;
}

display(): void {
const { containerEl } = this;
containerEl.empty();

new Setting(containerEl)
.setName('Sample Setting')
.setDesc('A simple example setting')
.addText(text => text
.setPlaceholder('Enter value')
.setValue(this.plugin.settings.mySetting)
.onChange(async (value) => {
this.plugin.settings.mySetting = value;
await this.plugin.saveSettings();
}));
}
}
