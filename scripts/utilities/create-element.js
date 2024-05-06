/**
 * Create an HTML element
 * @param {String} elementType The HTML element type
 * @param {Object} config An object containing the HTML element properties
 * @param {Array}  config.classes An array containing all the classes to be applied to the element
 * @param {Object} config.attributes An object containing all the properties/values to be applied to the element
 * @param {String} config.textContent The text to be appended to the element
 * @returns {HTMLElement} A HTML element
 */
function createElement (elementType = 'div', config = { classes: null, attributes: null, textContent: '' }) {
    const element = document.createElement(elementType);
    
    if (config.classes) {
        config.classes.forEach(elementClass => {
            element.classList.add(elementClass);
        });
    }

    if (config.attributes) {
        for (const [property, value] of Object.entries(config.attributes)) {
            element.setAttribute(property, value);
        }
    }

    if (config.textContent) {
        element.textContent = config.textContent;
    }

    return element;
}