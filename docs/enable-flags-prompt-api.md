# Enable Flags for Prompt API

## Overview

The Prompt API requires specific Chrome flags to be enabled in **Google Chrome Canary**. Follow the steps below to ensure you have the necessary setup to use Gemini Nano effectively.

### Step 1: Enable Optimization Guide

Open a new tab in Google Chrome Canary and navigate to:

```
chrome://flags/#optimization-guide-on-device-model
```

- Set the flag to **Enabled BypassPerfRequirement**.
- Restart Chrome Canary.

This step bypasses performance checks to allow the Gemini Nano to be downloaded on your device.

### Step 2: Enable Prompt API for Gemini Nano

Open a new tab and navigate to:

```
chrome://flags/#prompt-api-for-gemini-nano
```

- Set the flag to **Enabled**.
- Restart Chrome Canary.

### Step 3: Confirm Gemini Nano Availability

Open DevTools (F12 or right-click → Inspect) and run the following command in the console:

```javascript
(await ai.languageModel.capabilities()).available;
```

- **Result**: The expected result should be `'readily'`.

### Troubleshooting Availability Issues

If the above check fails, proceed with the following steps:

1. **Force API Recognition**
   - Open DevTools and run:

   ```javascript
   await ai.languageModel.create();
   ```

2. **Check Component Download**
   - Open a new tab and navigate to:

   ```
   chrome://components
   ```

   - Look for **Optimization Guide On Device Model** and ensure that it has a version greater or equal to `2024.9.25.2033`.
   - If no version is listed, click **Check for update** to force the download.

3. **Confirm the Download**
   - Once the model is downloaded, re-run the capabilities check:

   ```javascript
   (await ai.languageModel.capabilities()).available;
   ```

   - **Result**: `'readily'`