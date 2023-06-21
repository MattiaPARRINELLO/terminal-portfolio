const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
let erreur = false;
app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    await getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});

async function open_terminal() {
  createText("Bienvenue");
  await delay(700);
  createText("Demarrage du serveur...");
  await delay(700);
  createText("Chargement des fichiers...");
  loading();
  await delay(1500);
  createText("Vous avez plusieurs commandes a votre disposition.");
  createCode("projets", "Mes projets");
  createCode("a propos", "Qui je suis ?");
  createCode("help", "Affiche toutes les commandes");
  createCode("social -a", "Mes reseaux sociaux");

  await delay(500);
  new_line();
}

const new_line = () => {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/mattia-parrinello";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
};

const removeInput = () => {
  const div = document.querySelector(".type");
  app.removeChild(div);
};

const getInputValue = async () => {
  const value = document.querySelector("input").value;
  if (erreur) {
    createText(
      "<span style='color:red'>ḡ̸͔͇͈̺̤̻͚͑͌́f̴̱̼̱͕͔̓̓̑̌̚͘g̴̞̩̐͊̀̉̎̿̿͆̚s̴̘̘̬͖̜͇͕̮̹̠̅͊̽̀͊̓͝h̸̙͙̰̟̬̘̫̓̀̀̄̒̾̏͘ġ̶̨̮̻͕̳f̶̼̦̩̟̻̟̩̌̌̇̈́ͅh̶̡̪͇̥̥̹̙̱̔̎͋̄̊́̊̊͝d̶̛̟͎̖͔̂̒̽͌̉̒͗̃͠f̵̡͕̞̗̹̦̤̎͊͌̒̓̊̒̍͠ͅg̶̨͚͕̱̩̻͖̙̮̰̑̉̀͐̀̃ḣ̸̨͇̱̰̮̤͇̪̆̄̿̍͐̾̏̕̚͜f̷̘̫̾̄͝:̶͉̺̪͔̻̖̪̩̯̖͒̑͋͑̄̑͋͝l̸͈̫̯̭̱͑̾̈̍̀͝ȗ̷̡͐͑̇i̸̱͚̖̦͕̩͈͖̐̑͒̍̈́̾̚͠d̴̹̠͎́͆g̶̻͉̟̤̞̣̓g̴̙̰̭̲̿̓̓͂̐̃͌͝͝ý̶̢̦̙̲͎͊̈́̐̏̒́̅̋͘͜ȩ̴̢͎̰͔̦̣͉̜̒̔̑͌͠r̷̰̗̺͕̖̝̠̕͝i̸̧̝̦̬͐͠p̸͚̻̣̜̞̾̈̀͆̕͜͝g̵̹̤͉̳̝̮͆͜g̸̛͔͉̈́̀̏̒͒͑̕̕ë̷̠̗̪̻̙̝́̆̅̀̊r̸͓̈́̾͂̾̀́͋͘ͅu̷̼̎͐̓̍̓̈́̅͊̚o̷͓̞̠̻̙̜͉̔̑̐̀̌͜b̵̨̛̛̛̤̤͕͔͈̙̫̊̏̽̓͐̀̚v̸̢̢̲͕̺͙̝̣͓͕̀͑͛̾̅̈́̒̆̾͘o̵͎͖̚ë̵̺̼͉͕̹̗͕̠͔̘́̓̍̓͂̿̾͝ż̷̧̡̺̯̪̺͊ơ̸̡̮̤̲̝̫̭͚͉̣͌̉̈́̉̕͝͠b̸͚̻̙̪̲̻̏̋̇̅͊̈́z̷̪̝͇̖͓̩̭͛̎ͅô̴̡͓̦̞̹͂̀͛̌͋̓̊͘b̷̠̌̿͛̿͒̔̚͜z̵̛̔̈́̆͗̆̂͊́͝</span>"
    );
  } else if (value === "help") {
    trueValue(value);

    createCode("projets", "Mes projets");
    createCode("a propos", "Qui je suis ?");
    createCode("social -a", "Mes reseaux sociaux");
  } else if (value === "projets") {
    trueValue(value);
    createText(
      `
      <div><span class="br">[</span><br></div>
      <div class="tab"><span class="parentheses">{</span></div>
      <div class="doubleTab"><span class="key">"name"</span>: <span class="value">"Ebookstreet workout"</span>,</div>
      <div class="doubleTab"><span class="key">"description"</span>: <span class="value">"Un site web qui regroupe deux ebooks sur le street workout, il integre aussi un système de notation, etc."</span>,</div>
      <div class="doubleTab"><span class="key">"languages"</span>: <span class="value">"NodeJS, HTML, CSS, JS "</span>,</div>
      <div class="doubleTab"><a href="https://calisthenics.sobot.fr"><span class="key">"link"</span>: <span class="value">"https://calisthenics.sobot.fr"</span></a></div>
      <div class="tab"><span class="parentheses">}</span>,</div>
      <div class="tab"><span class="parentheses">{</span></div>
      <div class="doubleTab"><span class="key">"name"</span>: <span class="value">"Pierre Papier Ciseaux"</span>,</div>
      <div class="doubleTab"><span class="key">"description"</span>: <span class="value">"Le jeu de l'enfance de tous reprodruit en version web pour jouer contre un ordinateur"</span>,</div>
      <div class="doubleTab"><span class="key">"languages"</span>: <span class="value">"HTML, CSS, JS"</span>,</div>
      <div class="doubleTab"><a href="https://games.sobot.fr/pierre-papier-ciseaux"><span class="key">"link"</span>: <span class="value">"https://games.sobot.fr/pierre-papier-ciseaux"</span></a></div>
      <div class="tab"><span class="parentheses">}</span>,</div>
      <div class="tab"><span class="parentheses">{</span></div>
      <div class="doubleTab"><span class="key">"name"</span>: <span class="value">"Guess the Color"</span>,</div>
      <div class="doubleTab"><span class="key">"description"</span>: <span class="value">"Un jeu ou tu aura le code couleur RGB d'un couleur ainsi que des couleurs affiché, vous devrez associer la couleur au code RGB"</span>,</div>
      <div class="doubleTab"><span class="key">"languages"</span>: <span class="value">"HTML, CSS, JS"</span>,</div>
      <div class="doubleTab"><a href="https://games.sobot.fr/guess-the-color"><span class="key">"link"</span>: <span class="value">"https://games.sobot.fr/guess-the-color"</span></a></div>
      <div class="tab"><span class="parentheses">}</span>,</div>
      <div class="tab"><span class="parentheses">{</span></div>
      <div class="doubleTab"><span class="key">"name"</span>: <span class="value">"Trouver la paire"</span>,</div>
      <div class="doubleTab"><span class="key">"description"</span>: <span class="value">"Le but est de retourner des cartes et de former des paires en se rappelant de leur emplacement afin de gagner le maximum de points."</span>,</div>
      <div class="doubleTab"><span class="key">"languages"</span>: <span class="value">"HTML, CSS, JS"</span>,</div>
      <div class="doubleTab"><a href="https://games.sobot.fr/trouver-la-paire"><span class="key">"link"</span>: <span class="value">"https://games.sobot.fr/trouver-la-paire"</span></a></div>
      <div class="tab"><span class="parentheses">},</span></div>
      <div class="tab"><span class="parentheses">{</span></div>
      <div class="doubleTab"><span class="key">"name"</span>: <span class="value">"Visit Amsterdam"</span>,</div>
      <div class="doubleTab"><span class="key">"description"</span>: <span class="value">"Un site web qui met en avant la ville d'Amsterdam et propose des hotels"</span>,</div>
      <div class="doubleTab"><span class="key">"languages"</span>: <span class="value">"HTML, CSS, JS"</span>,</div>
      <div class="doubleTab"><a href="https://games.sobot.fr/visit-amsterdam"><span class="key">"link"</span>: <span class="value">"https://games.sobot.fr/visit-amsterdam"</span></a></div>
      <div class="tab"><span class="parentheses">}</span></div>

      <div><span class="br">]</span></div>
      `
    );
    // [
    //   {
    //     name: "calisthenics e-book",
    //     description: "calisthenics e-book",
    //     language: "NodeJS, HTML, CSS, JS",
    //     link: "calisthenics.sobot.fr",
    //   },
    //   {
    //     name: "Pierre Papier Ciseaux",
    //     description: "Pierre Papier Ciseaux",
    //     language: "HTML, CSS, JS",
    //     link: "games.sobot.fr/pierre-papier-ciseaux",
    //   },
    //   {
    //     name: "Guess the Color",
    //     description:
    //       "Un jeu ou tu aura le code couleur RGB d'un couleur ainsi que des couleurs affiché, vous devrez associer la couleur au code RGB",
    //     language: "HTML, CSS, JS",
    //     link: "games.sobot.fr/guess-the-color",
    //   },
    //   {
    //     name: "Trouver a paire",
    //     description:
    //       "Le but est de retourner des cartes et de former des paires en se rappelant de leur emplacement afin de gagner le maximum de points.",
    //     language: "HTML, CSS, JS",
    //     link: "games.sobot.fr/trouver-la-paire",
    //   },
    // ];
    // .br {
    //   color: #4c73d6;
    // }
    // .parentheses {
    //   color: #e1a648;
    // }
    // .key {
    //   color: #2f41df;
    // }
    // .value {
    //   color: #6156df;
    // }
  } else if (value === "a propos") {
    trueValue(value);
    createText("Salut, je suis Mattia :)");
    //create a date at the 2 Jan 2022
    const date = new Date("01/02/2022");
    //calculate how many days have passed since the date
    const days = Math.ceil((Date.now() - date) / (1000 * 60 * 60 * 24));
    //convert the days to years and don't round it
    const years = (days / 365).toFixed(1);
    // const years = Math.floor(days / 365);

    createText(
      `Je suis un développeur web junior. Je fais du <span class='red-txt'>NodeJS, HTML, CSS, et JS Natif</span> Mais pas que, je suis aussi un athlète de street workout depuis ${years}ans ! Si tu veux voir mes performances, fait la commande <span class='green-txt'>social -sport</span>`
    );
  } else if (value === "social -a") {
    trueValue(value);
    createText(
      "<a href='https://github.com/mattiaparrinello' target='_blank'> <span style='color:#ff5849'>const</span> <span style='color:#1673dd'>github</span> = <span style='color:#7a35bf'>require(</span><span style='color:#6d8fff'>github.com/mattiaparrinello</span><span style='color:#7a35bf'>)</span></a>"
    );
    createText(
      "<a href='https://instagram.com/mattia_gms' target='_blank'> <span style='color:#ff5849'>const</span> <span style='color:#1673dd'>instagram</span> = <span style='color:#7a35bf'>require(</span><span style='color:#6d8fff'>instagram.com/mattia_gms</span><span style='color:#7a35bf'>)</span></a>"
    );
  } else if (value === "social") {
    trueValue(value);
    createText("Utilisez la commande <span class='green-txt'>social -a</span>");
  } else if (value === "clear") {
    document.querySelectorAll("p").forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorAll("section")
      .forEach((e) => e.parentNode.removeChild(e));
  } else if (value === "social -sport") {
    trueValue(value);
    createText(
      "<a href='https://instagram.com/mattia_gms' target='_blank'> <span style='color:#ff5849'>let</span> <span style='color:#fffff'>instagram</span> = <span style='color:#7a35bf'>require(</span><span style='color:#6d8fff'>instagram.com/mattia_gms</span><span style='color:#7a35bf'>)</span></a>"
    );
    createText(
      "<a href='https://tiktok.com/mattia_gms' target='_blank'> <span style='color:#ff5849'>let</span> <span style='color:#fffff'>tiktok</span> = <span style='color:#7a35bf'>require(</span><span style='color:#6d8fff'>tiktok.com/mattia_gms</span><span style='color:#7a35bf'>)</span></a>"
    );
  } else if (value === "sudo rm -rf") {
    falseValue(value);
    erreur = true;
    console.log(erreur);
    createText("Attention erreur fatale, pour annuler faites...");

    createText("ḡ̸͔͇͈̺̤̻͚͑͌́f̴̱̼̱͕͔̓̓̑̌̚͘g̴̞̩̐͊̀̉̎̿̿͆̚s̴̘̘̬͖̜͇͕̮̹̠̅͊̽̀͊̓͝h̸̙͙̰̟̬̘̫̓̀̀̄̒̾̏͘ġ̶̨̮̻͕̳f̶̼̦̩̟̻̟̩̌̌̇̈́ͅh̶̡̪͇̥̥̹̙̱̔̎͋̄̊́̊̊͝d̶̛̟͎̖͔̂̒̽͌̉̒͗̃͠f̵̡͕̞̗̹̦̤̎͊͌̒̓̊̒̍͠ͅg̶̨͚͕̱̩̻͖̙̮̰̑̉̀͐̀̃ḣ̸̨͇̱̰̮̤͇̪̆̄̿̍͐̾̏̕̚͜f̷̘̫̾̄͝:̶͉̺̪͔̻̖̪̩̯̖͒̑͋͑̄̑͋͝l̸͈̫̯̭̱͑̾̈̍̀͝ȗ̷̡͐͑̇i̸̱͚̖̦͕̩͈͖̐̑͒̍̈́̾̚͠d̴̹̠͎́͆g̶̻͉̟̤̞̣̓g̴̙̰̭̲̿̓̓͂̐̃͌͝͝ý̶̢̦̙̲͎͊̈́̐̏̒́̅̋͘͜ȩ̴̢͎̰͔̦̣͉̜̒̔̑͌͠r̷̰̗̺͕̖̝̠̕͝i̸̧̝̦̬͐͠p̸͚̻̣̜̞̾̈̀͆̕͜͝g̵̹̤͉̳̝̮͆͜g̸̛͔͉̈́̀̏̒͒͑̕̕ë̷̠̗̪̻̙̝́̆̅̀̊r̸͓̈́̾͂̾̀́͋͘ͅu̷̼̎͐̓̍̓̈́̅͊̚o̷͓̞̠̻̙̜͉̔̑̐̀̌͜b̵̨̛̛̛̤̤͕͔͈̙̫̊̏̽̓͐̀̚v̸̢̢̲͕̺͙̝̣͓͕̀͑͛̾̅̈́̒̆̾͘o̵͎͖̚ë̵̺̼͉͕̹̗͕̠͔̘́̓̍̓͂̿̾͝ż̷̧̡̺̯̪̺͊ơ̸̡̮̤̲̝̫̭͚͉̣͌̉̈́̉̕͝͠b̸͚̻̙̪̲̻̏̋̇̅͊̈́z̷̪̝͇̖͓̩̭͛̎ͅô̴̡͓̦̞̹͂̀͛̌͋̓̊͘b̷̠̌̿͛̿͒̔̚͜z̵̛̔̈́̆͗̆̂͊́͝");

    setTimeout(() => {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, 3000);
  } else {
    falseValue(value);
    createText(`command not found: ${value}`);
  }
};

const trueValue = (value) => {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
};

const falseValue = (value) => {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
};
const createText = (text, classname) => {
  const p = document.createElement("p");

  p.innerHTML = text;
  app.appendChild(p);
};

const loading = async () => {
  const p = document.createElement("p");
  app.appendChild(p);
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      if (p.innerHTML === "...") p.innerHTML = "";
      p.innerHTML += ".";
    }, 500 * i);
  }
};

const createCode = (code, text) => {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
};

open_terminal();
