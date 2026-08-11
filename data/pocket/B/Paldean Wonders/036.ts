import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'fr-fr': "Glaivodo",
		'en-us': "Baxcalibur",
		'es-es': "Baxcalibur",
		'it-it': "Baxcalibur",
		'pt-br': "Baxcalibur",
		'de-de': "Espinodon"
  },
  illustrator: "Oswaldo KATO",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 140,
  types: ["Water"],
  dexId: [998],
  evolveFrom: {
		'fr-fr': "Cryodo",
		'en-us': "Arctibax",
		'es-es': "Arctibax",
		'it-it': "Arctibax",
		'pt-br': "Arctibax",
		'de-de': "Cryospino"
  },
  description: {
    en: "It launches itself into battle by flipping upside down and spewing frigid air from its mouth. It finishes opponents off with its dorsal blade.",
  },
  stage: "Stage2",
  abilities: [
    {
      type: "Ability",
      name: {
        en: "Ice Maker",
      },
      effect: {
        en: "Once during your turn, you may take a Water Energy from your Energy Zone and attach it to the Water Pokémon in the Active Spot.",
      },
    },
  ],
  attacks: [
    {
      name: {
        fr: "Queue Destructrice",
        en: "Buster Tail",
        es: "Cola Destructora",
        it: "Coda Distruttrice",
        pt: "Cauda Aniquiladora",
        de: "Zertrümmernder Schweif"
      },
      damage: "90",
      cost: ["Water", "Water", "Water"],
    },
  ],
  weaknesses: [
    {
      type: "Metal",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;