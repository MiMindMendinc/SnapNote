# Enable GitHub Pages (one-time)

If the **Deploy GitHub Pages** workflow fails with `Get Pages site failed`, enable Pages in the repo:

1. Open **Settings → Pages** on GitHub
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Re-run the **Deploy GitHub Pages** workflow from the Actions tab

Live URL after deploy: **https://mimindmendinc.github.io/SnapNote/**

The workflow uses `enablement: true` to auto-configure Pages when permissions allow.
