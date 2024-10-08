const baseUrl = "https://www.thecolorapi.com/scheme";

export function getColorSchemeForColor(color, mode, count) {
  console.log(`${baseUrl}?hex=${color}&mode=${mode}&count=${count}`);
  return fetch(`${baseUrl}?hex=${color}&mode=${mode}&count=${count}`)
      .then(response => response.json());
}
