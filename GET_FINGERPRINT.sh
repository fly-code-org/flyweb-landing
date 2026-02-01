#!/bin/bash
# Script to get complete SHA-256 fingerprint

echo "Getting SHA-256 fingerprint from debug keystore..."
echo ""

# Get the full certificate info
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android | grep -A 5 "Certificate fingerprints"

echo ""
echo "Extracting SHA256 (complete):"
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android 2>/dev/null | \
  grep "SHA256:" | \
  sed 's/.*SHA256: //' | \
  tr -d ' ' | \
  tr -d ':' | \
  tr '[:upper:]' '[:lower:]' | \
  head -c 64

echo ""
echo ""
echo "Length check (should be 64 characters):"
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android 2>/dev/null | \
  grep "SHA256:" | \
  sed 's/.*SHA256: //' | \
  tr -d ' ' | \
  tr -d ':' | \
  tr '[:upper:]' '[:lower:]' | \
  head -c 64 | \
  wc -c
