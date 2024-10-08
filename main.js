import { getColorSchemeForColor } from "./api.js";

function renderColorScheme(colorScheme) {

  const colorContainer = document.querySelector('.color-container');

  const colorHtml = colorScheme.map(color => {
      return `
        <div class="color-item">
          <div class="color-bar" style="background-color: ${color.hex.value}"></div>
          <p class="color-hex">${color.hex.value}</p>
          <p class="color-name">${color.name.value}</p>
        </div>
      `;
  }).join('');

  colorContainer.innerHTML = colorHtml;

  // Add click event listeners to hex values
  document.querySelectorAll('.color-hex').forEach(hexElement => {
    hexElement.addEventListener('click', function() {
      const hexValue = this.textContent;
      navigator.clipboard.writeText(hexValue)
        .then(() => {
          // Provide visual feedback
          const originalText = this.textContent;
          this.textContent = 'Copied!';
          setTimeout(() => {
            this.textContent = originalText;
          }, 1500);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    });
  });
}

document.getElementById('color-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const color = document.getElementById('color-input').value.slice(1); // No # needed in color
    const mode = document.getElementById('mode-select').value;
    const count = 5;
    console.log(color, mode, count);
    getColorSchemeForColor(color, mode, count)
        .then(data => {
            console.log(data);
            renderColorScheme(data.colors);
        })
        .catch(error => {
            console.error('Error fetching color scheme:', error);
        });
});