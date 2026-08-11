import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
	name: {
		'fr-fr': "Canarbello",
		'en-us': "Quaxwell",
		'es-es': "Quaxwell",
		'it-it': "Quaxwell",
		'pt-br': "Quaxwell",
		'de-de': "Fuentente"
	},
  illustrator: "kirisAki",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 80,
  types: ["Water"],
  dexId: [913],
  evolveFrom: {
		'fr-fr': "Coiffeton",
		'en-us': "Quaxly",
		'es-es': "Quaxly",
		'it-it': "Quaxly",
		'pt-br': "Quaxly",
		'de-de': "Kwaks"
  },
  description: {
    en: "The hardworking Quaxwell observes people and Pokémon from various regions and incorporates their movements into its own dance routines.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Splashing Turn",
        fr: "Tour Éclaboussant",
        es: "Giro Chapoteante",
        it: "Girata Inondante",
        pt: "Giro Borrifante",
        de: "Platschende Drehung"
      },
      damage: "40",
      cost: ["Water", "Water"],
      effect: {
        en: "Switch this Pokémon with 1 of your Benched Pokémon.",
        fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
        es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
        it: "Scambia questo Pokémon con uno della tua panchina.",
        pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
        de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
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
