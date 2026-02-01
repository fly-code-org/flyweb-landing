# Setting Up AASA File on Vercel

This guide explains how the Apple App Site Association (AASA) file is configured for your Next.js project on Vercel.

## What Was Done

### 1. Created AASA File
✅ File created at: `public/.well-known/apple-app-site-association`

Content:
```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "79L8UXYWLQ.com.fly.mentalhealth",
        "paths": [
          "/post/*"
        ]
      }
    ]
  }
}
```

### 2. Created Vercel Configuration
✅ File created at: `vercel.json`

This ensures the AASA file is served with:
- `Content-Type: application/json` (required by Apple)
- Proper cache control headers

## Deployment Steps

### 1. Commit and Push Changes

```bash
cd fly-landing
git add public/.well-known/apple-app-site-association vercel.json
git commit -m "Add AASA file for Universal Links"
git push origin main
```

### 2. Vercel Auto-Deploy

Vercel will automatically:
- Detect the changes
- Deploy the new version
- Serve the AASA file at: `https://flyapp.in/.well-known/apple-app-site-association`

### 3. Verify Deployment

After deployment, test the file:

```bash
# Check if file is accessible
curl -I https://flyapp.in/.well-known/apple-app-site-association

# Should return:
# HTTP/2 200
# Content-Type: application/json

# Check actual content
curl https://flyapp.in/.well-known/apple-app-site-association
```

### 4. Validate with Apple

Visit Apple's validation tool:
https://search.developer.apple.com/appsearch-validation-tool/

Enter: `https://flyapp.in`

## File Structure

```
fly-landing/
├── public/
│   └── .well-known/
│       └── apple-app-site-association  (no extension!)
├── vercel.json
└── ...
```

## Important Notes

1. **No File Extension**: The file must be named `apple-app-site-association` (NOT `apple-app-site-association.json`)

2. **Content-Type**: The `vercel.json` ensures the file is served with `Content-Type: application/json`

3. **HTTPS Only**: Vercel automatically serves over HTTPS, which is required

4. **No Redirects**: Vercel serves static files directly, no redirects needed

5. **Automatic Deployment**: Once pushed to your main branch, Vercel will automatically deploy

## Troubleshooting

### Issue: 404 Not Found

**Check:**
- File is in `public/.well-known/apple-app-site-association`
- File has no extension
- Deployment completed successfully on Vercel

**Solution:**
```bash
# Verify file exists
ls -la public/.well-known/apple-app-site-association

# Check Vercel deployment logs
# Go to Vercel dashboard > Your Project > Deployments
```

### Issue: Wrong Content-Type

**Check:**
- `vercel.json` is in the root directory
- Headers configuration is correct

**Solution:**
- Verify `vercel.json` syntax is valid JSON
- Check Vercel deployment logs for errors

### Issue: Apple Validation Fails

**Common causes:**
1. File has `.json` extension (should be no extension)
2. Content-Type is not `application/json`
3. File is not accessible over HTTPS
4. App ID format is incorrect

**Debug:**
```bash
# Test with verbose output
curl -v https://flyapp.in/.well-known/apple-app-site-association

# Check headers
curl -I https://flyapp.in/.well-known/apple-app-site-association
```

## Testing Deep Links

After deployment and validation:

### Test Universal Link (iOS)
1. Send yourself a message with: `https://flyapp.in/post/TEST_POST_ID`
2. Tap the link
3. App should open directly (not Safari)

### Test Custom URL Scheme
```bash
# iOS Simulator
xcrun simctl openurl booted "flyapp://post/TEST_POST_ID"

# Android
adb shell am start -W -a android.intent.action.VIEW -d "flyapp://post/TEST_POST_ID" com.fly.mentalhealth
```

## Additional: Android App Links

If you want to add Android App Links support, create:

**File:** `public/.well-known/assetlinks.json`

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.fly.mentalhealth",
    "sha256_cert_fingerprints": [
      "YOUR_APP_SHA256_FINGERPRINT"
    ]
  }
}]
```

The `vercel.json` already includes headers for this file.

## Quick Reference

**File Location:** `public/.well-known/apple-app-site-association`

**Vercel URL:** `https://flyapp.in/.well-known/apple-app-site-association`

**Validation:** https://search.developer.apple.com/appsearch-validation-tool/

**Team ID:** `79L8UXYWLQ`

**Bundle ID:** `com.fly.mentalhealth`

**App ID:** `79L8UXYWLQ.com.fly.mentalhealth`
