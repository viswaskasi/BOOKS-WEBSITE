/**
 * Vite Template Boilerplate Counter Utility
 * 
 * NOTE: This function is part of the default Vite project scaffolding.
 * It is defined here for reference but is not imported/called in main.js.
 * 
 * @param {HTMLButtonElement} element - The DOM button node that will trigger the count
 */
export function setupCounter(element) {
  // 1. Establish local state tracking for click count
  let counter = 0;

  // 2. Closure function that updates state and modifies DOM content
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `Count is ${counter}`;
  };

  // 3. Attach click event listener to increment counter state on user clicks
  element.addEventListener('click', () => setCounter(counter + 1));

  // 4. Initialize the element with default text showing zero clicks
  setCounter(0);
}
