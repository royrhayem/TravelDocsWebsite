# FlyID - Website Context & Source of Truth

## App Overview
**Name:** FlyID (formerly TravelDocs)
**Platform:** iOS 18+ & iPadOS, Apple Watch Companion App, iOS App Clip
**Tagline:** Your Passport, Digitized. 100% Offline & Secure.
**Core Value Proposition:** Securely scan, store, and manage passports, visas, and ID cards exclusively on-device. FlyID uses the iPhone's camera for instant MRZ data extraction and the NFC reader (`NFCPassportReader`) to cryptographically verify e-Passport authentications and extract high-resolution biometric ID photos.

## Technology Stack & Integrations
- **Core Framework:** SwiftUI, SwiftData (for local persistence).
- **In-App Purchases:** StoreKit 2 & RevenueCat.
- **Hardware Integration:** CoreNFC & AVFoundation for MRZ parsing.
- **Analytics:** Privacy-preserving tracking via TelemetryDeck (No user data sent).
- **Deep Linking:** Uses `flyid://` and `https://flyid.app/verify` endpoints for App Clips and Emergency Document Sharing.

## Key Features
- **Instant MRZ Scanning:** High-speed optical character recognition locally on-device.
- **Biometric NFC Verification:** Reads secure biometric chips (DG2) via NFC to extract the authentic government-stored face photo.
- **Privacy-First Vault:** Data is securely isolated using iOS Sandbox encryption and SwiftData. Cloud storage is completely absent by design.
- **Automated Expiry Alerts:** Smart local push notifications configured natively (1 year, 6 months, 3 months, 1 month, 2 weeks).
- **Family & Business Profiles:** Organize documents logically (e.g., "Personal", "Work") with custom icons or NFC-verified profile photos.
- **Encrypted Emergency Sharing:** Securely share a time-limited, end-to-end encrypted link to a document when necessary.
- **Verified Card System:** Cryptographically verifiable digital credential generator for trusted document sharing.
- **Apple Watch Companion:** View active and expired documents directly from your wrist for fast reference while boarding.

## Target Audience
- Frequent flyers, international business travelers, and expats.
- Privacy-conscious individuals who refuse to store ID documents in cloud platforms.
- Parents managing multiple passports for their entire family.

## Monetization Model (Freemium via RevenueCat)
FlyID operates on a strictly enforced freemium model.

**Free Tier Limits:**
- Maximum of 3 saved documents.
- 1 Profile only.
- Cannot persist NFC data (NFC reading is preview-only; Face Images are not saved).
- No Emergency Sharing or Verified Card functionalities.
- Basic expiration notifications, but cannot customize the notification horizon timeframe.

**FlyID Pro (Subscription: $2.99 Monthly / $19.99 Annual - Includes 1-Week Free Trial):**
- **Unlimited** document scans and storage.
- **Unlimited** traveler profiles (folders).
- **NFC Persistence Enabled** (Save high-res biometric photos & NFC verification timestamps).
- **Encrypted Emergency Sharing & Verified Cards** enabled.
- **Customizable** Expiry notifications and per-document reminder overrides.

## Brand Trust & Security Posture
- "Your data never leaves your device unless you choose to share it."
- No account, email registration, or cloud login required.
- Works entirely offline (except for RevenueCat subscription validations and TelemetryDeck anonymous pings).
