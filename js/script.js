const allCharacters = document.querySelectorAll(".character");
const currentCharacterName = document.querySelector("#character-name");
const currentCharacterDescription = document.querySelector(
  "#character-description"
);
const currentCharacterImg = document.querySelector(".big-character");

const mutantsData = [
  {
    img: "../src/images/card-ciclope.png",
    name: "cyclops",
    description:
      "He has the power to fire optic blasts by an accident that happened to him as a child, but he cannot control them.",
  },
  {
    img: "../src/images/card-lince-negra.png",
    name: "black-lynx",
    description:
      "She has the power to pass through solid matter, energy fields, optic blasts while remaining intact, and also has the power to walk on air.",
  },
  {
    img: "../src/images/card-jean-grey.png",
    name: "jean-gray",
    description:
      "Jean Gray is an omega-level mutant and the main avatar of the Phoenix Force, in which she manifests cosmic powers. Telepathy and telekinesis.",
  },
  {
    img: "../src/images/card-magneto.png",
    name: "magneto",
    description:
      "He has the power of magnetokinesis, i.e. controlling metal objects and creating magnetic fields.",
  },
  {
    img: "../src/images/card-noturno.png",
    name: "nightcrawler",
    description:
      "He is a mutant born with a tail, pointed ears and the power to teleport.",
  },
  {
    img: "../src/images/card-tempestade.png",
    name: "storm",
    description:
      "It has the power to control the forces of nature, very powerful. It can produce lightning, rain, ice, wind, fog, among other effects.",
  },
  {
    img: "../src/images/card-vampira.png",
    name: "vampire",
    description:
      "She has the power to absorb the vitality and memory of the people she touches or in the case of mutants the powers and memory, but only temporarily.",
  },
  {
    img: "../src/images/card-wolverine.png",
    name: "wolverine",
    description:
      "Powers. Metal Claws. Regenerative Healing Factor. Super Agility.",
  },
];

allCharacters.forEach((character) => {
  character.addEventListener("mouseover", () => {
    mutantsData.forEach((mutant) => {
      if (mutant.name === character.id) {
        currentCharacterName.textContent = mutant.name;
        currentCharacterDescription.textContent = mutant.description;
        currentCharacterImg.src = mutant.img;
      }
    });
  });
});
