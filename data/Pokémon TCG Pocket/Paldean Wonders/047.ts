import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Dachsbun",
		fr: "Briochien",
		es: "Dachsbun",
		it: "Dachsbun",
		pt: "Dachsbun",
		de: "Backel"
  },
  illustrator: "You Iribi",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Psychic"],
  dexId: [927],
  evolveFrom: {
		en: "Fidough",
		fr: "Pâtachiot",
		es: "Fidough",
		it: "Fidough",
		pt: "Fidough",
		de: "Hefel"
  },
  description: {
    en: "The pleasant aroma that emanates from this Pokémon's body helps wheat grow, so Dachsbun has been treasured by farming villages.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
				en: "Play Rough",
				fr: "Câlinerie",
				es: "Carantoña",
				it: "Carineria",
				pt: "Jogo Duro",
				de: "Knuddler"
      },
      damage: "50+",
      cost: ["Psychic", "Psychic"],
      effect: {
				en: "Flip a coin. If heads, this attack does 50 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 50 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu."
      },
    },
  ],
  weaknesses: [
    {
      type: "Metal",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;