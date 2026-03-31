# موسوعة الجرائم بحق المسلمين
# Encyclopedia of Crimes & Massacres Against Muslims — Daily AI Documentation

A fully responsive, production-ready, single-file website combining a verified **historical archive of 28+ events** with **AI-powered live daily documentation** of ongoing and recent crimes against Muslims worldwide.

## ✨ Features

| Feature | Details |
|---|---|
| 📱 Fully Responsive | Mobile, tablet, desktop — all screen sizes |
| 🌐 Bilingual | Arabic (RTL, primary) + English toggle |
| 🌙 Dark / Light Theme | Persisted via localStorage |
| 📡 AI Daily Documentation | Live web search via Anthropic API |
| 📚 28+ Historical Events | Verified database with full details |
| 🗂 Region Filters | 8 geographic regions |
| 🔍 Live Search | By event name, location, or year |
| ↕ Sort Options | Date, victims, alphabetical |
| ⊞ Grid / List View | Toggle between layouts |
| 🔗 Verified Sources | Wikipedia, HRW, Amnesty, UN, ICJ per event |
| ♿ Accessible | ARIA labels, semantic HTML, keyboard nav |
| 📦 Zero Dependencies | Pure HTML + CSS + JS, single file |

## 🚀 Deploy to GitHub Pages

```bash
# 1. Create a new GitHub repository
# 2. Upload index.html to the root
# 3. Go to Settings → Pages → Source: main / root
# 4. Site live at: https://<username>.github.io/<repo>/
```

## 🤖 AI Daily Documentation

Click **"جلب أحداث اليوم" / "Fetch Today's Events"** to trigger:
1. Anthropic Claude searches the live web for recent events
2. Results appear with full details, victims, locations, and sources
3. Counter tracks how many daily reports have been generated

> **Note**: The AI feature requires the page to be served via Anthropic's platform or a proxy that injects the API key. For GitHub Pages hosting, you can add your Anthropic API key or use a backend proxy.

## 📂 Structure

```
/
├── index.html   ← entire website (self-contained, ~100KB)
└── README.md
```

## 📚 Historical Database Sources

- [Wikipedia](https://en.wikipedia.org) — primary reference for each event
- [Human Rights Watch](https://www.hrw.org) — investigations and reports
- [Amnesty International](https://www.amnesty.org) — human rights documentation  
- [United Nations OHCHR](https://www.ohchr.org) — official UN reports
- [International Court of Justice](https://www.icj-cij.org) — legal proceedings
- [ICTY](https://www.icty.org) — war crimes tribunal records

## ⚠️ Disclaimer

This site is intended solely for **historical documentation and human rights awareness**. All information is sourced from reputable academic and journalistic sources. It does not incite hatred or violence toward any group.

## 📄 License

MIT License — free to use, share, and modify with attribution.
