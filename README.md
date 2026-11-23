# Brew21 site (GitHub Pages)

Static site, no build step. Push to `main`, then Settings > Pages > Deploy from branch > `/ (root)`, custom domain `brew21.coffee`, Enforce HTTPS.

DNS: four A records for the apex (185.199.108.153, .109.153, .110.153, .111.153; verify in GitHub docs), `www` CNAME to `<user>.github.io`, `store` A record to the IP Square shows. Keep MX records.

`404.html` forwards old `/s/*` and `/product/*` links to store.brew21.coffee. Terms and privacy are starting templates; have them reviewed.
