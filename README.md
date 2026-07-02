# 沖繩 7/8–7/10 行程 Web App

Mm Lin 的沖繩三日行程整理成 mobile-first 靜態 Web App。

## 內容

- 7/8 南部海邊＋太鼓舞＋玉泉洞＋Outlet＋美らSUN Beach＋鮨おにかい
- 7/9 北部＋美麗海＋瀨底 / 本部浮潛＋焼肉もとぶ牧場
- 7/10 港川＋PARCO CITY＋宜野灣 Tropical Beach 輕量海上活動
- 每個 stop 都有：介紹、圖片、Google Maps 連結、tips
- 含浮潛安排、雨天 / 高溫備案、打包清單、地圖總覽

## 開發

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## 發布方式

### Vercel

```bash
npm i -g vercel
vercel --prod
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. 建 GitHub repo，push 專案。
2. 在 `vite.config.ts` 設定 `base: '/repo-name/'`。
3. 使用 GitHub Actions 或 `gh-pages` 套件部署 `dist/`。

> 目前本機 `gh` 尚未登入；若要我直接推到 GitHub Pages，需要先完成 `gh auth login` 或提供其他部署目標。
