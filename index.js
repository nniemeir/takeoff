const themeSwitcher = document.querySelector('.theme-switcher');
const buttons = themeSwitcher.querySelectorAll('button');

const handleThemeSelection = (event) => {
  const target = event.target;
  const theme = target.getAttribute('data-theme');
  const isPressed = target.getAttribute('aria-pressed');
  document.documentElement.setAttribute("data-selected-theme", theme);
  
  const previouslyPressedButton = document.querySelector('[data-theme][aria-pressed="true"]');
  previouslyPressedButton.setAttribute('aria-pressed', false);
  target.setAttribute('aria-pressed', 'true');
}

buttons.forEach((button) => {
   button.addEventListener('click', handleThemeSelection);
});
