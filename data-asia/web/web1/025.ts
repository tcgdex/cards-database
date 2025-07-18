import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Surfing Pikachu",
         ja: "サーフィンピカチュ",
         fr: "Surfing Pikachu",
         de: "Surfen von Pikachu",
         es: "Surf Pikachu",
         it: "Surfing Pikachu",
         pt: "Surfing Pikachu",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [25],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Water"],
          name: {
            en: "Surf",
            ja: "サーフィン",
            fr: "Surf",
            de: "Surfen",
            es: "Navegar",
            it: "Navigare",
            pt: "Surf",
          },
          damage: 30,
        },
      ],

      retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
