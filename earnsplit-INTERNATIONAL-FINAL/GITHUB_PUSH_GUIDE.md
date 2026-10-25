# PUSH TO GITHUB - 3 WAYS

## WAY 1: Website (Easiest, phone works)
1. github.com -> New Repository -> Name: earnsplit-vortexforge -> Public -> Create
2. Click "uploading an existing file" -> Drag ALL files from this zip folder (not the zip file itself)
3. Commit directly to main -> Done

## WAY 2: Git Commands (Laptop)
Open Terminal / Command Prompt in this unzipped folder:

```
git init
git add .
git commit -m "EarnSplit International 15 networks + hamburger + PWA + push + logo"
git remote add origin https://github.com/YOURUSERNAME/earnsplit-vortexforge.git
git branch -M main
git push -u origin main
```
YOURUSERNAME = your GitHub username. Password = Personal Access Token.
Get Token: GitHub -> Settings -> Developer Settings -> Personal Access Tokens (classic) -> Generate -> check repo -> copy.

## WAY 3: GitHub Desktop App
1. Download GitHub Desktop app
2. File -> Add Local Repository -> Select this folder
3. Publish Repository -> Publish

## AFTER PUSH -> VERCEL DEPLOY

1. vercel.com -> Login with GitHub -> Add New Project -> Import earnsplit-vortexforge
2. Framework Preset: Other (VERY IMPORTANT - fixes Couldn't find any pages or app directory)
3. Root Directory: ./ (leave empty)
4. Build Command: empty
5. Output Directory: empty
6. Deploy -> Done! URL: https://earnsplit-vortexforge.vercel.app

Every time you git push, Vercel auto-deploys (30 sec).

## ADD API KEYS LATER

Vercel Dashboard -> Your Project -> Settings -> Environment Variables -> Add:

BITLABS_API_KEY, TIMEWALL_API_KEY, ADSCEND_PUB_ID, ADSCEND_HASH, ONESIGNAL_APP_ID, MONETAG_ZONE_ID, PAYSTACK_SECRET_KEY

Get keys from: bitlabs.ai/publishers, timewall.io, adscendmedia.com, onesignal.com, monetag.com

## POSTBACK URLs TO SET IN EACH NETWORK DASHBOARD

Set this in each network:

https://YOUR-VERCEL-URL.vercel.app/api/webhooks/offerwall?network=bitlabs
https://YOUR-VERCEL-URL.vercel.app/api/webhooks/offerwall?network=timewall
https://YOUR-VERCEL-URL.vercel.app/api/webhooks/offerwall?network=adscend etc.

This is how your 30% arrives. User gets 70% pending 7 days.

Support: vortexforgestudiosllc@gmail.com | https://wa.me/2347057796517
