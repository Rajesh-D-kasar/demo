const countElement = document.querySelector("[data-count]");
const buttons = document.querySelectorAll("[data-action]");
let count = 0;

const render = () => {
    countElement.textContent = count;
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const action = button.dataset.action;

        if (action === "increase") {
            count += 1;
        }

        if (action === "decrease") {
            count -= 1;
        }

        if (action === "reset") {
            count = 0;
        }

        render();
    });
});

render();
