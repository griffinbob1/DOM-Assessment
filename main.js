const main = document.querySelector("main");
const body = document.querySelector("body");
joke1 = "I sold my vacuum the other day. All it was doing was collecting dust"
joke2 = "Did you hear the story about the claustrophobic astronaut? He just needed some space."
joke3 = "What kind of tea is hard to swallow? Reality."

const template = (`
    <h1>My Jokes</h1>
    <ul>
        <p>${joke1}</p>
        <p>${joke2}</p>
        <p>${joke3}</p>
    </ul>
    `);

main.innerHTML = template;

const p = document.createElement('p');
p.textContent = "That's all folks!";
body.appendChild(p);
