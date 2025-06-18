# 🔌 VaultOS Plugin Template | Obsidian

> _A modular beginning to powerful plugin architecture — designed the PtiCalin way._

Welcome to the VaultOS-style Obsidian Plugin Template — structured, scalable, and friendly to creators.  
Built to streamline development, boost creativity, and follow best practices recommended by the Obsidian community.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
[![Status: In Progress](https://img.shields.io/badge/status-WIP-yellow.svg)]()  
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./.github/PULL_REQUEST_TEMPLATE.md)  
[![Sponsor PtiCalin](https://img.shields.io/badge/Sponsor-💖-f06292.svg?logo=githubsponsors)](https://github.com/sponsors/pticalin)

---

## 🧰 Features

- 🧠 TypeScript-based Obsidian plugin scaffold  
- 🎯 100% compatible with [Obsidian sample plugin structure](https://github.com/obsidianmd/obsidian-sample-plugin)
- ⚙️ Rollup-powered build system  
- ✨ Includes GitHub workflows, issue templates, and PR templates  
- 📦 Clean modular layout for faster scaling  
- 💬 Optional Discussions and Sponsor links

---

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/temp-repo-obsidian-plugin.git
cd temp-repo-obsidian-plugin
npm install
npm run build
```

Then copy the `dist/` folder into `.obsidian/plugins/your-plugin-id/` in your Obsidian vault.

---

## 🛠 Dev Mode (Live Compile)

Use live watch mode to iterate quickly:

```bash
npm run dev
```

Make changes to `src/main.ts` (or other `.ts` files), and they'll recompile on save.

---

## 🧱 Folder Structure

```bash
📦 temp-repo-obsidian-plugin/
├── .github/              → Issues, PR templates, workflows
├── dist/                 → Final build (used by Obsidian)
├── src/                  → TypeScript source files
├── main.ts               → Entry point (if not using src/)
├── styles.css            → Optional plugin styles
├── manifest.json         → Plugin metadata
├── package.json          → Build scripts & dependencies
├── rollup.config.js      → Bundler setup
├── tsconfig.json         → TypeScript config
└── README.md             → You're here!
```

---

## 🔄 Releasing a New Version

To publish a new release:

1. Update `manifest.json` and `versions.json`
2. Run:

```bash
npm version patch | minor | major
```

3. Create a new GitHub release:
   - Tag must match the version (e.g., `1.0.1`, not `v1.0.1`)
   - Attach `main.js`, `manifest.json`, and `styles.css`

See [sample-plugin releases](https://github.com/obsidianmd/obsidian-sample-plugin/releases) for reference.

---

## 🌐 Adding Your Plugin to Obsidian's Community List

1. Ensure your repo has:
   - `manifest.json`
   - `main.js`
   - `README.md`
2. Follow the [official plugin submission guide](https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines)
3. Submit a PR to [`obsidian-releases`](https://github.com/obsidianmd/obsidian-releases)

---

## 🤝 Contributing

We love PRs, discussions, and feedback!

- [🐛 Report a Bug](https://github.com/your-username/temp-repo-obsidian-plugin/issues/new?template=bug.yml)
- [🌟 Request a Feature](https://github.com/your-username/temp-repo-obsidian-plugin/issues/new?template=feature-request.yml)
- [📦 Open a PR](./.github/PULL_REQUEST_TEMPLATE.md)

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

---

## 📜 License

MIT — open for remixing, improving, and learning from.  
Please credit and consider sharing back improvements.

---

## 💌 Sponsor

If this template helped you get started faster or with more clarity,  
consider supporting PtiCalin's ongoing plugin ecosystem and modular tooling work:

➡ [github.com/sponsors/pticalin](https://github.com/sponsors/pticalin)

---

> _Have fun building. Spend less time structuring and more time imagining._  
