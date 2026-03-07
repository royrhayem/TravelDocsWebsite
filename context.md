# FlyID - Website Context & Source of Truth

## App Overview
**Name:** FlyID (formerly TravelDocs)
**Platform:** iOS 18+ & iPadOS, Apple Watch Companion App
**Tagline:** The ultimate secure digital wallet for your travel documents.
**Core Value Proposition:** Securely scan, store, and manage passports, visas, and ID cards on-device. FlyID uses the iPhone's camera for instant MRZ data extraction and the NFC reader to verify biometric chips, ensuring cryptographic authenticity and extracting high-quality ID photos directly from the document's chip.

## Key Features
- **Instant MRZ Scanning:** Point the camera at a passport or visa to instantly extract the document number, expiry, name, and nationality.
- **Biometric NFC Verification:** Read the encrypted chip in modern e-Passports to verify authenticity and extract the actual government-stored photo.
- **Privacy-First Vault:** All data is encrypted offline, stored entirely on-device (via SwiftData), and locked behind Face ID / Touch ID.
- **Automated Expiry Alerts:** Smart push notifications reminding users to renew their documents 1 year, 6 months, 3 months, or weeks before they expire.
- **Family & Business Profiles:** Organize documents logically for different travelers (e.g., "Personal", "Work", "Kids").
- **Encrypted Emergency Sharing:** Securely share a time-limited, end-to-end encrypted link to a document when needed.
- **Apple Watch Companion:** View active and expired documents directly from your wrist, including expiry dates and country flags.

## Target Audience
- Frequent flyers and international travelers.
- Digital nomads and expats.
- Parents managing multiple passports for their family.
- Business travelers who need quick access to passport details for booking flights.

## Monetization Model (Freemium)
**Free Tier:**
- Basic camera scanning.
- 1 Profile only.
- Limited to a set maximum number of documents.
- NFC reading preview only (data isn't persisted).
- No emergency sharing.

**FlyID Pro (Subscription: Monthly / Annual):**
- Unlimited document scans and storage.
- Unlimited traveler profiles (folders).
- Persistent NFC-verified data storage and high-res biometric photos.
- Encrypted Emergency Sharing.
- Expiry notifications and reminders.

## Design Aesthetic & UI/UX
- **Look and Feel:** Built natively with SwiftUI. The aesthetics strictly follow Apple's Human Interface Guidelines (HIG).
- **Inspiration:** The design language mirrors premium system apps like Apple Wallet, Apple Health, and iOS Settings.
- **Vibe:** Clean, premium, modern, reliable, and highly trustworthy.
- **Structure:** Features beautiful "Document Cards" with system materials, clear typography, and subtle shadows. Focuses on visual hierarchy and scannability, avoiding flashy or custom-styled UI elements that break iOS conventions.

## Brand Trust & Security Posture
- "Your data never leaves your device unless you choose to share it."
- No account or cloud login required to use the app.
- Works entirely offline.

## Competitive Advantage
Unlike generic photo albums, notes apps, or basic document scanners, FlyID intelligently parses the Machine Readable Zone (MRZ) and validates the cryptographic signature on the passport's NFC chip. This prevents manual data-entry errors and provides absolute certainty about passport details when confidently booking expensive international flights.
