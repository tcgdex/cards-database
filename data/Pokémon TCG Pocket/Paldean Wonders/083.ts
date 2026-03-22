import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Squawkabilly",
		fr: "Tapatoès",
		de: "Krawalloro",
		it: "Squawkabilly",
		es: "Squawkabilly",
		pt: "Squawkabilly",
		'es-mx': "Squawkabilly"
  },
  illustrator: "Oswaldo KATO",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 70,
  types: ["Colorless"],
  dexId: [931],
  description: {
    en: "Green-feathered flocks hold the most sway. When they're out searching for food in the mornings and evenings, it gets very noisy.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Quick Attack"
      },
      damage: "30+",
      cost: ["Colorless", "Colorless"],
      effect: {
        en: "Flip a coin. If heads, this attack does 30 more damage.",
        fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
        es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
        'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
        de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
        it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
        pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais."
      },
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;