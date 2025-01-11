import { appDetails } from "../info";

export function setTheme(theme) {
  let html = document.querySelector("html");
  if (html) {
    html.setAttribute("data-theme", theme);
  }
  localStorage.setItem(appDetails.themeLocalStorageKey, theme);
}

export function getTheme() {
  let theme = localStorage.getItem(appDetails.themeLocalStorageKey);
  return theme ?? "cupcake";
}
