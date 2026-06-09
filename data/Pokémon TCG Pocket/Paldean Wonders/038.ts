import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Pawmi",
		fr: "Pohm",
		es: "Pawmi",
		it: "Pawmi",
		de: "Pamo",
		'pt-br': "Pawmi",
		ko: "빠모"
  },
  illustrator: "kantaro",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Lightning"],
  dexId: [921],
  description: {
    en: "The pads of its paws are electricity-discharging organs. Pawmi fires electricity from its forepaws while standing unsteadily on its hind legs.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
				en: "Random Spark",
				fr: "Étincelle Surprise",
				es: "Chispa al Azar",
				it: "Scintilla Casuale",
				pt: "Fagulha Aleatória",
				de: "Zufälliger Funke"
      },
      cost: ["Lightning"],
      effect: {
        en: "This attack does 10 damage to 1 of your opponent's Pokémon.",
        fr: "Cette attaque inflige 10 dégâts à l'un des Pokémon de votre adversaire.",
        es: "Este ataque hace 10 puntos de daño a 1 de los Pokémon de tu rival.",
        it: "Questo attacco infligge 10 danni a uno dei Pokémon\ndel tuo avversario.",
        de: "Diese Attacke fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu.",
        'pt-br': "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente.",
        ko: "상대의 포켓몬 1마리에게 10데미지를 준다."
      },
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;