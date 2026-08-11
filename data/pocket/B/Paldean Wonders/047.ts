import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Dachsbun",
		'fr-fr': "Briochien",
		'es-es': "Dachsbun",
		'it-it': "Dachsbun",
		'pt-br': "Dachsbun",
		'de-de': "Backel"
  },
  illustrator: "You Iribi",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Psychic"],
  dexId: [927],
  evolveFrom: {
		'en-us': "Fidough",
		'fr-fr': "Pâtachiot",
		'es-es': "Fidough",
		'it-it': "Fidough",
		'pt-br': "Fidough",
		'de-de': "Hefel"
  },
  description: {
    en: "The pleasant aroma that emanates from this Pokémon's body helps wheat grow, so Dachsbun has been treasured by farming villages.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
				'en-us': "Play Rough",
				'fr-fr': "Câlinerie",
				'es-es': "Carantoña",
				'it-it': "Carineria",
				'pt-br': "Jogo Duro",
				'de-de': "Knuddler"
      },
      damage: "50+",
      cost: ["Psychic", "Psychic"],
      effect: {
				'en-us': "Flip a coin. If heads, this attack does 50 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 50 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu."
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