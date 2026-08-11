import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'fr-fr': "Terraiste de Paldea",
		'en-us': "Paldean Clodsire",
		'es-es': "Clodsire de Paldea",
		'it-it': "Clodsire di Paldea",
		'pt-br': "Clodsire de Paldea",
		'de-de': "Paldea-Suelord"
  },
  illustrator: "Shin Nagasawa",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 120,
  types: ["Darkness"],
  dexId: [980],
  evolveFrom: {
		'en-us': "Paldean Wooper",
		'fr-fr': "Axoloto de Paldea",
		'es-es': "Wooper de Paldea",
		'es-mx': "Wooper de Paldea",
		'de-de': "Paldea-Felino",
		'it-it': "Wooper di Paldea",
		'pt-br': "Wooper de Paldea"
  },
  description: {
    en: "It lives at the bottom of ponds and swamps. It will carry Wooper on its back and ferry them across water from one shore to the other.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        fr: "Marteau Boueux",
        en: "Muddy Hammer",
        es: "Martillo Lodoso",
        it: "Fangomartello",
        pt: "Martelo Lamacento",
        de: "Schlammhammer"
      },
      damage: 70,
      cost: ["Darkness", "Darkness", "Colorless"],
      effect: {
        fr: "Défaussez la carte du dessus du deck de votre adversaire.",
        en: "Discard the top card of your opponent's deck.",
        es: "Descarta la primera carta de la baraja de tu rival.",
        it: "Scarta la prima carta del mazzo del tuo avversario.",
        pt: "Descarte a carta de cima do baralho do seu oponente.",
        de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
      },
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;