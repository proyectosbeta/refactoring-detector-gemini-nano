# Refactoring Detector Gemini Nano

## ES

Refactoring Detector Gemini Nano es una herramienta web para analizar codigo, detectar oportunidades de refactorizacion y traducir las recomendaciones al espanol usando Gemini Nano desde Chrome Canary.

## Overview

Refactoring Detector Gemini Nano is a tool designed to assist with code analysis and refactoring recommendations by leveraging modern web technologies and Gemini Nano's capabilities. This guide provides the necessary steps to configure and use the Prompt API and Translation API. The tool not only detects potential code refactorings but also translates the refactoring suggestions into Spanish for greater accessibility.

### ES

Refactoring Detector Gemini Nano ayuda a desarrolladores y contributors a revisar fragmentos de codigo directamente desde el navegador. La aplicacion usa la Prompt API de Gemini Nano para analizar el codigo ingresado, identificar posibles mejoras de legibilidad, mantenibilidad, eficiencia y correccion, y luego usa la Translation API para mostrar una version en espanol de las recomendaciones.

El flujo principal es:

1. Pegar un fragmento de codigo en la interfaz.
2. Ejecutar el analisis con Gemini Nano mediante la Prompt API.
3. Revisar las sugerencias originales generadas por el modelo.
4. Consultar la traduccion al espanol en la pestana de resultado traducido.

Esta documentacion explica como preparar el entorno, habilitar las APIs necesarias y probar la herramienta de forma local o desde la demo publicada.

## Technologies Used

- HTML, CSS, JavaScript
- Markdown
- [Google Chrome Canary Version 133.0.6874.0](https://www.google.com/chrome/canary/)
- Prompt API (Gemini Nano)
- Translation API (Gemini Nano)

### ES

Tecnologias principales:

- HTML, CSS y JavaScript para la interfaz web.
- Markdown para renderizar las respuestas generadas por Gemini Nano.
- [Google Chrome Canary Version 133.0.6874.0](https://www.google.com/chrome/canary/) o una version compatible con las APIs experimentales requeridas.
- Prompt API, usada para enviar el codigo al modelo Gemini Nano y recibir sugerencias de refactorizacion.
- Translation API, usada para traducir las recomendaciones del ingles al espanol.

La aplicacion esta pensada como una prueba practica de APIs on-device en Chrome. No requiere backend: el analisis y la traduccion dependen de las capacidades disponibles en el navegador.

### Prerequisites

To use Gemini Nano, you need to install **Google Chrome Canary**. Make sure you are using the latest version for compatibility.

#### ES

Requisitos previos:

- Instalar **Google Chrome Canary**.
- Usar una version reciente de Canary para asegurar compatibilidad con Gemini Nano, Prompt API y Translation API.
- Habilitar los flags experimentales indicados en la documentacion del proyecto.
- Verificar desde DevTools que las APIs esten disponibles antes de probar la aplicacion.

Ejemplo de verificacion rapida para la Prompt API:

```javascript
(await ai.languageModel.capabilities()).available;
```

El resultado esperado es:

```text
readily
```

## Enabling Required Flags

To properly enable Gemini Nano's capabilities, certain Chrome flags need to be enabled. Please follow the links below for detailed instructions on each API:

- [Enable Flags for Prompt API](./docs/enable-flags-prompt-api.md)
- [Enable Flags for Translation API](./docs/translation-api.md)

### ES

Para que Gemini Nano funcione correctamente, Chrome Canary debe tener habilitados los flags experimentales correspondientes. Sigue estas guias del repositorio:

- [Habilitar flags para Prompt API](./docs/enable-flags-prompt-api.md)
- [Habilitar flags para Translation API](./docs/translation-api.md)

Orden recomendado para configurar el entorno:

1. Habilitar el modelo on-device desde `chrome://flags/#optimization-guide-on-device-model`.
2. Habilitar la Prompt API desde `chrome://flags/#prompt-api-for-gemini-nano`.
3. Confirmar que Gemini Nano este disponible con `ai.languageModel.capabilities()`.
4. Habilitar la Translation API desde `chrome://flags/#translation-api`.
5. Descargar o verificar los componentes de traduccion desde `chrome://components`.

Si alguna API devuelve un estado distinto de `readily`, revisa las guias enlazadas antes de reportar un bug.

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

### ES

Puedes usar el siguiente fragmento como prueba inicial dentro de la aplicacion:

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))
```

Ejemplo practico de uso:

1. Abre la aplicacion en Google Chrome Canary.
2. Pega el codigo en el area de texto.
3. Haz clic en **Detect refactor**.
4. Revisa **Original Result** para ver la respuesta original de Gemini Nano.
5. Abre **Translated Result** para consultar la traduccion al espanol.

El analisis puede sugerir mejoras como simplificar condicionales, agregar validaciones de entrada, convertir recursion a iteracion para evitar problemas de profundidad de pila o mejorar la claridad del nombre de variables, segun el codigo enviado.

## Use

Only Google Canary 

[Demo](https://refactoring-detector-gemini-nano.proyectosbeta.net/)

### ES

Uso recomendado:

- Ejecuta la herramienta en **Google Chrome Canary**.
- Verifica que la Prompt API y la Translation API esten disponibles antes de iniciar el analisis.
- Usa la [demo publicada](https://refactoring-detector-gemini-nano.proyectosbeta.net/) para probar el flujo completo.
- Para desarrollo local, abre `index.html` en Chrome Canary desde este repositorio.

Flujo para contributors:

1. Revisa `index.html` para entender la estructura de la interfaz.
2. Revisa `assets/js/script.js` para el flujo de analisis, renderizado Markdown y traduccion.
3. Revisa `assets/css/styles.css` para ajustes visuales.
4. Manten actualizados los documentos de `docs/` si cambian los flags, nombres de APIs o pasos de configuracion.

Ejemplo de prueba manual para una contribucion:

```text
1. Abrir index.html en Chrome Canary.
2. Pegar un fragmento de JavaScript, Python u otro lenguaje comun.
3. Ejecutar Detect refactor.
4. Confirmar que Original Result muestra recomendaciones.
5. Confirmar que Translated Result muestra la version en espanol.
6. Probar el caso vacio y verificar que la app avise que se debe ingresar codigo.
```

Notas para desarrollo:

- La herramienta depende de APIs experimentales del navegador, por lo que el comportamiento puede variar entre versiones de Chrome Canary.
- Si la traduccion no esta disponible, revisa primero la disponibilidad de `self.translation` y los paquetes de idioma instalados.
- Si Gemini Nano no responde, verifica el estado de `ai.languageModel.capabilities()` y el componente **Optimization Guide On Device Model**.
