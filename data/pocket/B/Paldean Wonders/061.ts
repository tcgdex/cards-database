import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Klawf",
		'fr-fr': "Craparoi",
		'es-es': "Klawf",
		'de-de': "Klibbe",
		'it-it': "Klawf",
		'pt-br': "Klawf",
		'es-mx': "Klawf"
  },
  illustrator: "nagimiso",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Fighting"],
  dexId: [950],
  description: {
    en: "This Pokémon lives on sheer cliffs. It sidesteps opponents’ attacks, then lunges for their weak spots with its claws.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Adrenaline Hammer",
        fr: "Marteau Adrénaline",
        es: "Martillo Adrenalina",
        it: "Martello Adrenalinico",
        pt: "Martelo de Adrenalina",
        de: "Adrenalinhammer"
      },
      damage: "70",
      cost: ["Fighting", "Fighting"],
      effect: {
        en: "This Pokémon is now Confused.",
        fr: "Ce Pokémon est maintenant Confus.",
        es: "Este Pokémon pasa a estar Confundido.",
        it: "Questo Pokémon viene confuso.",
        pt: "Este Pokémon agora está Confuso.",
        de: "Dieses Pokémon ist jetzt verwirrt."
      },
    },
  ],
  weaknesses: [
    {
      type: "Grass",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;