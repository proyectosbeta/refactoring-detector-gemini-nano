# Refactoring Detector Gemini Nano

## Overview

Refactoring Detector Gemini Nano is a tool designed to assist with code analysis and refactoring recommendations by leveraging modern web technologies and Gemini Nano's capabilities. This guide provides the necessary steps to configure and use the Prompt API and Translation API. The tool not only detects potential code refactorings but also translates the refactoring suggestions into Spanish for greater accessibility.

### ES - Descripción General

Detector de Refactorización Gemini Nano es una herramienta diseñada para asistir en el análisis de código y proporcionar recomendaciones de refactorización aprovechando las tecnologías web modernas y las capacidades de Gemini Nano. Esta guía proporciona los pasos necesarios para configurar y utilizar la API de Prompt y la API de Traducción. La herramienta no solo detecta posibles refactorizaciones de código, sino que también traduce las sugerencias de refactorización al español para una mayor accesibilidad.

## Technologies Used

- HTML, CSS, JavaScript
- Markdown
- [Google Chrome Canary Version 133.0.6874.0](https://www.google.com/chrome/canary/)
- Prompt API (Gemini Nano)
- Translation API (Gemini Nano)

### ES - Tecnologías Utilizadas

- HTML, CSS, JavaScript
- Markdown
- [Google Chrome Canary Versión 133.0.6874.0](https://www.google.com/chrome/canary/)
- API de Prompt (Gemini Nano)
- API de Traducción (Gemini Nano)

## Prerequisites

To use Gemini Nano, you need to install **Google Chrome Canary**. Make sure you are using the latest version for compatibility.

### ES - Requisitos Previos

Para utilizar Gemini Nano, es necesario instalar **Google Chrome Canary**. Asegúrate de usar la versión más reciente para garantizar compatibilidad total con las APIs de Prompt y Traducción.

## Enabling Required Flags

To properly enable Gemini Nano's capabilities, certain Chrome flags need to be enabled. Please follow the links below for detailed instructions on each API:

- [Enable Flags for Prompt API](./docs/enable-flags-prompt-api.md)
- [Enable Flags for Translation API](./docs/translation-api.md)

### ES - Habilitación de Banderas Requeridas

Para habilitar correctamente las capacidades de Gemini Nano, es necesario activar ciertas banderas de Chrome. Sigue los enlaces a continuación para obtener instrucciones detalladas de configuración de cada API:

- [Habilitar Banderas para API de Prompt](./docs/enable-flags-prompt-api.md)
- [Habilitar Banderas para API de Traducción](./docs/translation-api.md)

## Example Input Code

You can use the following code snippet as an example input in the application:

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))
```

This code will be analyzed for possible improvements and refactoring suggestions. The refactoring suggestions will then be translated into Spanish.

### ES - Ejemplo de Código de Entrada

Puedes utilizar el siguiente fragmento de código como ejemplo de entrada en la aplicación:

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))
```

Este código será analizado para detectar posibles mejoras y sugerencias de refactorización. Las sugerencias de refactorización se traducirán automáticamente al español mediante la API de Traducción.

## Usage

Only Google Canary is supported for running this application.

### ES - Uso

Solo se soporta Google Canary para ejecutar esta aplicación. Asegúrate de tener habilitadas todas las banderas necesarias antes de usar la herramienta.

## Demo

[Live Demo](https://refactoring-detector-gemini-nano.proyectosbeta.net/)

### ES - Demo en Vivo

[Demo en Vivo](https://refactoring-detector-gemini-nano.proyectosbeta.net/)
