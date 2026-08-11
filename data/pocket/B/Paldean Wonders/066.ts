import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Lokix",
		'fr-fr': "Gambex",
		'es-es': "Lokix",
		'de-de': "Lextremo",
		'it-it': "Lokix",
		'pt-br': "Lokix",
		'es-mx': "Lokix"
  },
  illustrator: "Souichirou Gunjima",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Darkness"],
  dexId: [920],
  evolveFrom: {
		'en-us': "Nymble",
		'fr-fr': "Lilliterelle",
		'es-es': "Nymble",
		'de-de': "Micrick",
		'it-it': "Nymble",
		'pt-br': "Nymble",
		'es-mx': "Nymble"
  },
  description: {
    en: "It uses its normally folded third set of legs when in Showdown Mode. This places a huge burden on its body, so it can't stay in this mode for long.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
				'en-us': "Rocket Jump",
				'fr-fr': "Saut Propulsé",
				'es-es': "Salto Cohete",
				'it-it': "Saltorazzo",
				'pt-br': "Pulo de Foguete",
				'de-de': "Raketensprung"
      },
      damage: "80",
      cost: ["Darkness"],
      effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue uma moeda. Se sair coroa, esse ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
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