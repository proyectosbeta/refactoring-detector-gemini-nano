# Enable Flags for Translation API

## Overview

The Translation API requires specific flags to be enabled in **Google Chrome Canary**. Follow the steps below to enable and verify its functionality.

### Step 1: Enable Translation API Flag

Open a new tab in Google Chrome Canary and navigate to:

```
chrome://flags/#translation-api
```

- Set the flag to **Enabled without language pack limit**.
- Restart Chrome Canary.

### Step 2: Download Translation Components

Navigate to the following demo page to initiate the download of necessary components:

```
https://translation-demo.glitch.me/
```

- Click on **from en to es** under `canTranslate()`.
- Wait for the language models and translation components to download in the background.

### Step 3: Monitor Download Progress

To monitor the progress of the Chrome TranslateKit components, navigate to:

```
chrome://components
```

### Step 4: Confirm Translation API Availability

Open DevTools and run the following command in the console:

```javascript
await translation.canTranslate({sourceLanguage: "en", targetLanguage: "es"});
```

- **Result**: The expected result should be `'readily'`.

### Additional Note

You can manually install or uninstall language packs by navigating to:

```
chrome://on-device-translation-internals/
```

This allows you to manage translation components as needed.

---

Feel free to refer back to these documents whenever necessary. Properly enabling these features ensures you can fully leverage the capabilities of Gemini Nano for both code refactoring detection and translation of results into Spanish, enhancing usability and accessibility for diverse users.

