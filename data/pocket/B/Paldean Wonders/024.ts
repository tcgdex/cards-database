import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Quaquaval",
		'fr-fr': "Palmaval",
		'es-es': "Quaquaval",
		'it-it': "Quaquaval",
		'pt-br': "Quaquaval",
		'de-de': "Bailonda"
  },
  illustrator: "Kouki Saitou",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 150,
  types: ["Water"],
  dexId: [914],
  evolveFrom: {
		'fr-fr': "Canarbello",
		'en-us': "Quaxwell",
		'es-es': "Quaxwell",
		'it-it': "Quaxwell",
		'pt-br': "Quaxwell",
		'de-de': "Fuentente"
  },
  description: {
    en: "Dancing in ways that evoke far-away places, this Pokémon mesmerizes all that see it. Flourishes of its decorative water feathers slice into its foes.",
  },
  stage: "Stage2",
  abilities: [
    {
      type: "Ability",
      name: {
        en: "Torrent",
      },
      effect: {
        en: "If this Pokémon's remaining HP is 50 or less, attacks used by this Pokémon do +60 damage to your opponent's Active Pokémon.",
      },
    },
  ],
  attacks: [
    {
      name: {
        en: "Hydro Kick",
        fr: "Pied Hydro",
        es: "Hidropatada",
        it: "Idrocalcio",
        pt: "Chute d'Água",
        de: "Hydrokick"
      },
      damage: 90,
      cost: ["Water", "Water", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;