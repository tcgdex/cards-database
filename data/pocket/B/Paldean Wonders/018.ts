import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Skeledirge",
		'fr-fr': "Flâmigator",
		'es-es': "Skeledirge",
		'it-it': "Skeledirge",
		'pt-br': "Skeledirge",
		'de-de': "Skelokrok"
  },
  illustrator: "nagimiso",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 150,
  types: ["Fire"],
  dexId: [911],
  evolveFrom: {
		'fr-fr': "Crocogril",
		'en-us': "Crocalor",
		'es-es': "Crocalor",
		'it-it': "Crocalor",
		'pt-br': "Crocalor",
		'de-de': "Lokroko"
  },
  description: {
    en: "Skeledirge's gentle singing soothes the souls of all that hear it. It burns its enemies to a crisp with flames of over 5,400 degrees Fahrenheit.",
  },
  stage: "Stage2",
  abilities: [
    {
      type: "Ability",
      name: {
        en: "Passionate Voice",
      },
      effect: {
        en: "Once during your turn, you may discard 1 Fire Energy from this Pokémon in order to use this Ability. During this turn, attacks used by your Fire Pokémon do +50 damage to your opponent's Active Pokémon.",
      },
    },
  ],
  attacks: [
    {
      name: {
        en: "Heat Crash",
        fr: "Tacle Feu",
        de: "Brandstempel",
        it: "Marchiafuoco",
        pt: "Choque de Calor",
        es: "Golpe Calor",
        'es-mx': "Golpe de Calor"
      },
      damage: "70",
      cost: ["Fire", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Water",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;
