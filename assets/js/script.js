const codeText = document.getElementById("code-text");
const refactorButton = document.getElementById("refactor-button");
const resultDiv = document.getElementById("result");
const translateDiv = document.getElementById("translate");

refactorButton.addEventListener("click", async () => {
  const code = codeText.value.trim();

  if (!code) {
    alert("Por favor, ingresa el código que deseas analizar.");
    return;
  }

  resultDiv.innerHTML = "<p class='waiting-message'>Please wait while the code is being analyzed...</p>";
  translateDiv.innerHTML = "<p class='waiting-message'>Please wait while the text is being translated to Spanish...</p>";

  try {
    // Check for browser AI support
    const languageModelCapabilities = await ai.languageModel.capabilities();
    if (languageModelCapabilities.available === "no") {
      alert("LanguageModel API not available in this browser.");
      return;
    }

    // Create language model instance
    const languageModelRefactoringCode = await ai.languageModel.create({
      systemPrompt: `
                You are an expert software developer with a deep understanding of multiple programming languages.

                **1. Language Detection:**

                - Analyze the provided code and determine the programming language it is written in.

                **2. Refactoring Evaluation:**

                - If the language is detected and refactoring is possible, evaluate the code on a scale of 1 to 10 based on its:
                    - Readability and maintainability
                    - Efficiency
                    - Correctness
                - Provide suggestions for improvement and potential refactoring techniques that could be applied.

                **3. Feedback:**

                - If the language is not detected or refactoring is not possible, explain why.

                **Example Code:**`,
    });

    const response = await languageModelRefactoringCode.prompt(
      `Analyze the following Python code and provide suggestions for refactoring:\n\`\`\`python\n${code}\n\`\`\``
    );

    await displayMarkdown(response, resultDiv);

    const translatedText = await translateComment(response);
    await displayMarkdown(translatedText, translateDiv);
  } catch (error) {
    console.error("Error analyzing code:", error);
    alert("Error analyzing code. Please try again.");
  }
});

async function translateComment(text) {
  try {
    if ("createTranslator" in self.translation) {
      const translator = await self.translation.createTranslator({
        sourceLanguage: "en",
        targetLanguage: "es",
      });

      return await translator.translate(text);
    } else {
      return "Translation API not available in this browser.";
    }
  } catch (err) {
    return "An error occurred. Please try again.";
  }
}

async function displayMarkdown(text, elementHtml) {
  elementHtml.innerHTML = await marked.parse(text);
}