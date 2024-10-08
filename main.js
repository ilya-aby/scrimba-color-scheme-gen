import { getColorSchemeForColor } from "./api.js";

function renderColorScheme(colorScheme) {

  const colorContainer = document.querySelector('.color-container');

  const colorHtml = colorScheme.map(color => {
      return `
        <div class="color-item">
          <div class="color" style="background-color: ${color.hex.value}"></div>
          <p class="color-hex">${color.hex.value}</p>
          <p class="color-name">${color.name.value}</p>
        </div>
      `;
  }).join('');

  colorContainer.innerHTML = colorHtml;
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