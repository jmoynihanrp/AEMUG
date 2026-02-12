/**
 * Create Page Form Block
 * Provides a form with a textbox for creating new pages
 */

export default function decorate(block) {
  const formContainer = document.createElement('div');
  formContainer.className = 'create-page-form-container';

  const form = document.createElement('form');
  form.className = 'create-page-form';

  const title = document.createElement('h2');
  title.className = 'create-page-form-title';
  title.textContent = 'Create New Page';

  const label = document.createElement('label');
  label.className = 'create-page-form-label';
  label.textContent = 'Page Content:';
  label.setAttribute('for', 'page-content');

  const textarea = document.createElement('textarea');
  textarea.className = 'create-page-form-input';
  textarea.id = 'page-content';
  textarea.name = 'pageContent';
  textarea.placeholder = 'Enter page content or prompt...';
  textarea.rows = 6;
  textarea.required = true;

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className = 'create-page-form-submit';
  submitButton.textContent = 'Create Page';

  const resultContainer = document.createElement('div');
  resultContainer.className = 'create-page-form-result';
  resultContainer.style.display = 'none';

  form.appendChild(title);
  form.appendChild(label);
  form.appendChild(textarea);
  form.appendChild(submitButton);
  form.appendChild(resultContainer);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const content = textarea.value.trim();
    if (!content) {
      return;
    }

    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Creating...';
    resultContainer.style.display = 'block';
    resultContainer.textContent = 'Processing your request...';
    resultContainer.className = 'create-page-form-result loading';

    try {
      // For now, we'll just display a success message
      // In a real implementation, this would call an API endpoint
      // that uses OpenAI to generate content and create the page

      // Simulate API call
      await new Promise((resolve) => {
        setTimeout(resolve, 1500);
      });

      resultContainer.textContent = `Page creation initiated with content: "${content.substring(0, 50)}${content.length > 50 ? '...' : ''}"`;
      resultContainer.className = 'create-page-form-result success';
      textarea.value = '';
    } catch (error) {
      resultContainer.textContent = `Error: ${error.message}`;
      resultContainer.className = 'create-page-form-result error';
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Create Page';
    }
  });

  formContainer.appendChild(form);
  block.innerHTML = '';
  block.appendChild(formContainer);
}
