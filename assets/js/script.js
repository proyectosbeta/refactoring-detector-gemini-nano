// Element References
const codeText = document.getElementById("code-text");
const refactorButton = document.getElementById("refactor-button");
const resultDiv = document.getElementById("result");
const translateDiv = document.getElementById("translate");

// Set up event listeners
setTabSwitchListeners();
setRefactorButtonListener();

// Event Listener Functions
function setTabSwitchListeners() {
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => switchTab(button));
  });
}

function setRefactorButtonListener() {
  refactorButton.addEventListener("click", handleRefactorButtonClick);
}

// Event Handlers
function switchTab(button) {
  const tab = button.getAttribute('data-tab');

  // Remove 'active' class from all tabs and contents
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  // Add 'active' class to the selected tab and its content
  button.classList.add('active');
  document.getElementById(tab).classList.add('active');
}

async function handleRefactorButtonClick() {
  const code = codeText.value.trim();

  if (!code) {
    alert("Please enter the code you wish to analyze.");
    return;
  }

  showWaitingMessages();

  try {
    // Check AI capabilities
    const languageModelCapabilities = await ai.languageModel.capabilities();
    if (languageModelCapabilities.available === "no") {
      alert("LanguageModel API not available in this browser.");
      return;
    }

    // Get refactoring suggestions
    const response = await getRefactoringSuggestions(code);
    await displayMarkdown(response, resultDiv);

    // Translate suggestions
    const translatedText = await translateComment(response);
    await displayMarkdown(translatedText, translateDiv);
  } catch (error) {
    console.error("Error analyzing code:", error);
    alert("Error analyzing code. Please try again.");
  }
}

// Helper Functions
function showWaitingMessages() {
  resultDiv.innerHTML = "<p class='waiting-message'>Please wait while the code is being analyzed...</p>";
  translateDiv.innerHTML = "<p class='waiting-message'>Please wait while the text is being translated to Spanish...</p>";
}

async function getRefactoringSuggestions(code) {
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

  return await languageModelRefactoringCode.prompt(
    `Analyze the following code and provide suggestions for refactoring:\n\`\`\`\n${code}\n\`\`\``
  );
}

async function translateComment(text) {
  try {
    const html = await convertMarkdownToHtml(text);

    if ("createTranslator" in self.translation) {
      const translator = await self.translation.createTranslator({
        sourceLanguage: "en",
        targetLanguage: "es",
      });

      return await translator.translate(html);
    } else {
      return "Translation API not available in this browser.";
    }
  } catch (err) {
    return "An error occurred. Please try again.";
  }
}

async function convertMarkdownToHtml(text) {
  return marked.parse(text);
}

async function displayMarkdown(text, elementHtml) {
  elementHtml.innerHTML = await convertMarkdownToHtml(text);
}
