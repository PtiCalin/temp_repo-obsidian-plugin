# 🔌 VaultOS Obsidian Plugin Template

> _A modular beginning to powerful plugin architecture._

Welcome to the official VaultOS-style Obsidian Plugin Template, powered by PtiCalin flair.  
This repo is crafted for structured development, modular scaling, and joyful collaboration.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Status: WIP](https://img.shields.io/badge/status-WIP-yellow.svg)](WIP)
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./.github/PULL_REQUEST_TEMPLATE.md)
[![GitHub Discussions](https://img.shields.io/badge/💬-Discussions-blueviolet?logo=github)](https://github.com/your-username/vaultos-plugin-template/discussions)
[![Sponsor PtiCalin](https://img.shields.io/badge/Sponsor-💖-f06292.svg?logo=githubsponsors)](https://github.com/sponsors/your-username)

---

## 🧰 Features

- 🧠 Obsidian plugin scaffold in TypeScript
- ✅ Follows the official Obsidian plugin folder structure (`src/`, `dist/`)
- 📦 Rollup build system with `manifest.json`
- 📁 Ready-to-use GitHub Actions and PR templates
- 💬 Discussions and sponsor links for community-driven growth

---

## 🚀 Getting Started

Clone this template and start building your own plugin:

```bash
git clone https://github.com/your-username/vaultos-plugin-template.git
cd vaultos-plugin-template
```

### 🛠 Local Setup

#### Quick Setup
Run the provided script to install dependencies and build:

```bash
npm run setup
```

Internet access is needed the first time to download Node packages. If you're using the Codex environment, be sure to enable internet access so the script can fetch dependencies.

```bash
npm install
npm run build
```

After building, copy the contents of `/dist` into your Obsidian vault’s `.obsidian/plugins/` folder.

---

## 🧱 Folder Structure

```plaintext
src/           → TypeScript plugin source
dist/          → Compiled output used by Obsidian
.github/       → Community files (issues, PR templates, CI)
manifest.json  → Plugin manifest
package.json   → Build and dependency config
rollup.config.js → Bundler setup
tsconfig.json  → TypeScript options
styles.css     → Optional styling
```

---

## 🤝 Contributing

We welcome contributions of all kinds!

Use our templates to get started:

- [🐛 Bug Reports](https://github.com/your-username/vaultos-plugin-template/issues/new?template=bug.yml)
- [🌟 Feature Requests](https://github.com/your-username/vaultos-plugin-template/issues/new?template=feature-request.yml)
- [📦 Pull Requests](./.github/pull_request_template.md)

Read our [CONTRIBUTING.md](CONTRIBUTING.md) for more info, or start a conversation in [💬 GitHub Discussions](https://github.com/your-username/vaultos-plugin-template/discussions).

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).  
Use freely, fork creatively — just spread the love.

---

## 💌 Sponsor

If this template helped you get started faster or better, consider sponsoring here:  
[**github.com/sponsors/your-username**](https://github.com/sponsors/your-username)

---

Have fun building, and spend less time structuring
