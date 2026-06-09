import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Lokix",
		fr: "Gambex",
		es: "Lokix",
		de: "Lextremo",
		it: "Lokix",
		pt: "Lokix",
		'es-mx': "Lokix"
  },
  illustrator: "Souichirou Gunjima",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Darkness"],
  dexId: [920],
  evolveFrom: {
		en: "Nymble",
		fr: "Lilliterelle",
		es: "Nymble",
		de: "Micrick",
		it: "Nymble",
		pt: "Nymble",
		'es-mx': "Nymble"
  },
  description: {
    en: "It uses its normally folded third set of legs when in Showdown Mode. This places a huge burden on its body, so it can't stay in this mode for long.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
				en: "Rocket Jump",
				fr: "Saut Propulsé",
				es: "Salto Cohete",
				it: "Saltorazzo",
				pt: "Pulo de Foguete",
				de: "Raketensprung"
      },
      damage: "80",
      cost: ["Darkness"],
      effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue uma moeda. Se sair coroa, esse ataque não fará nada.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
      },
    },
  ],
  weaknesses: [
    {
      type: "Grass",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;