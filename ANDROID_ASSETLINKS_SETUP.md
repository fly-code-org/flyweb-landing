# Android App Links Setup Guide

This guide will help you set up Android App Links for your Flutter app deployed on `flyapp.in`.

## Current Status

✅ **assetlinks.json file created** at: `public/.well-known/assetlinks.json`
✅ **Vercel headers configured** in `vercel.json`
⚠️ **SHA-256 fingerprint needed** - Follow steps below to get it

## Step 1: Get Your SHA-256 Certificate Fingerprint

You need the SHA-256 fingerprint of your app's signing certificate. The method depends on whether you're using a debug or release build.

### Option A: Debug Build (Development)

For debug builds, use the debug keystore:

```bash
# On macOS/Linux
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android | grep SHA256

# On Windows
keytool -list -v -keystore %USERPROFILE%\.android\debug.keystore -alias androiddebugkey -storepass android -keypass android | findstr SHA256
```

**Output example:**
```
SHA256: AA:BB:CC:DD:EE:FF:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:11:22:33:44:55:66:77:88:99:AA:BB
```

**Copy the SHA256 value** (remove colons and convert to lowercase):
```
aabbccddeeff112233445566778899aabbccddeeff112233445566778899aabb
```

### Option B: Release Build (Production)

For release builds, use your release keystore:

```bash
keytool -list -v -keystore /path/to/your/release.keystore -alias your-key-alias
```

You'll be prompted for the keystore password. Then look for the SHA256 fingerprint.

### Option C: From Google Play Console (If App is Published)

1. Go to [Google Play Console](https://play.google.com/console)
2. Select your app
3. Go to **Release** > **Setup** > **App signing**
4. Copy the **SHA-256 certificate fingerprint** from the "App signing key certificate" section

### Option D: From APK File

If you have an APK file:

```bash
# Extract certificate from APK
keytool -printcert -jarfile your-app.apk | grep SHA256
```

## Step 2: Update assetlinks.json

Once you have your SHA-256 fingerprint:

1. Open `fly-landing/public/.well-known/assetlinks.json`
2. Replace `REPLACE_WITH_YOUR_SHA256_FINGERPRINT` with your actual fingerprint (lowercase, no colons)

**Example:**
```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.example.fly",
      "sha256_cert_fingerprints": [
        "aabbccddeeff112233445566778899aabbccddeeff112233445566778899aabb"
      ]
    }
  }
]
```

## Step 3: Multiple Fingerprints (Optional)

If you have multiple signing keys (e.g., debug and release), you can add both:

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.example.fly",
      "sha256_cert_fingerprints": [
        "debug_fingerprint_here",
        "release_fingerprint_here"
      ]
    }
  }
]
```

## Step 4: Deploy to Vercel

```bash
cd fly-landing
git add public/.well-known/assetlinks.json
git commit -m "Add Android App Links configuration"
git push origin main
```

## Step 5: Verify Deployment

After deployment, test the file:

```bash
# Check if file is accessible
curl -I https://flyapp.in/.well-known/assetlinks.json

# Should return:
# HTTP/2 200
# Content-Type: application/json

# Check actual content
curl https://flyapp.in/.well-known/assetlinks.json
```

## Step 6: Validate with Google

Use Google's Digital Asset Links API to verify:

```bash
curl "https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://flyapp.in&relation=delegate_permission/common.handle_all_urls"
```

Or use the online validator:
https://developers.google.com/digital-asset-links/tools/generator

Enter:
- **Website domain**: `https://flyapp.in`
- **Package name**: `com.example.fly`
- **SHA-256 fingerprint**: Your fingerprint

## Step 7: Test App Links

### Test on Android Device/Emulator

```bash
# Test App Link
adb shell am start -a android.intent.action.VIEW -d "https://flyapp.in/post/TEST_POST_ID" com.example.fly

# Test custom URL scheme (fallback)
adb shell am start -a android.intent.action.VIEW -d "flyapp://post/TEST_POST_ID" com.example.fly
```

### Verify App Link Handling

1. Open Chrome on Android device
2. Navigate to: `https://flyapp.in/post/TEST_POST_ID`
3. The app should open directly (not show "Open with" dialog)
4. If it shows "Open with", tap your app and select "Always"

## Troubleshooting

### Issue: App Links Not Working

**Check:**
1. File is accessible: `curl https://flyapp.in/.well-known/assetlinks.json`
2. Content-Type is `application/json`
3. SHA-256 fingerprint matches exactly (case-sensitive, no colons)
4. Package name matches exactly: `com.example.fly`
5. App is installed on device
6. Android 6.0+ (API 23+) required

**Debug:**
```bash
# Check file content
curl https://flyapp.in/.well-known/assetlinks.json

# Verify with Google API
curl "https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://flyapp.in&relation=delegate_permission/common.handle_all_urls"
```

### Issue: Wrong SHA-256 Fingerprint

**Common mistakes:**
- Using SHA1 instead of SHA256
- Including colons in the fingerprint
- Using uppercase instead of lowercase
- Extra spaces or newlines

**Solution:**
- Use `grep SHA256` (not SHA1)
- Remove all colons: `AA:BB:CC` → `aabbcc`
- Convert to lowercase
- Remove any whitespace

### Issue: Package Name Mismatch

**Verify package name:**
- Check `android/app/build.gradle.kts`: `applicationId = "com.example.fly"`
- Must match exactly in `assetlinks.json`

## Quick Reference

**File Location:** `public/.well-known/assetlinks.json`

**Vercel URL:** `https://flyapp.in/.well-known/assetlinks.json`

**Package Name:** `com.example.fly`

**Validation:** https://developers.google.com/digital-asset-links/tools/generator

## Next Steps

After setting up:
1. ✅ iOS Universal Links (AASA) - Already working!
2. ✅ Android App Links (assetlinks.json) - Complete after adding fingerprint
3. ✅ Custom URL Scheme - Already configured in AndroidManifest.xml and Info.plist

Your deep linking setup will be complete! 🎉
