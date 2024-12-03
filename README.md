# Refactoring Detector Gemini Nano

## Overview

Refactoring Detector Gemini Nano is a tool designed to assist with code analysis and refactoring recommendations by leveraging modern web technologies and Gemini Nano's capabilities. This guide provides the necessary steps to configure and use the Prompt API and Translation API. The tool not only detects potential code refactorings but also translates the refactoring suggestions into Spanish for greater accessibility.

## Technologies Used

- HTML, CSS, JavaScript
- Markdown
- [Google Chrome Canary Version 133.0.6874.0](https://www.google.com/chrome/canary/)
- Prompt API (Gemini Nano)
- Translation API (Gemini Nano)

### Prerequisites

To use Gemini Nano, you need to install **Google Chrome Canary**. Make sure you are using the latest version for compatibility.

## Enabling Required Flags

To properly enable Gemini Nano's capabilities, certain Chrome flags need to be enabled. Please follow the links below for detailed instructions on each API:

- [Enable Flags for Prompt API](./docs/enable-flags-prompt-api.md)
- [Enable Flags for Translation API](./docs/translation-api.md)

## Example Input Code

You can use the following code snippet as an example input in the application:

```python
# Example Python Code for Factorial Calculation
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))
```

This code will be analyzed for possible improvements and refactoring suggestions. The refactoring suggestions will then be translated into Spanish.