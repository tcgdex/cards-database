import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Pokmon Flute",
         ja: "ポケモンフルート",
         fr: "Flûte pokemon",
         de: "Pokemon -Flöte",
         es: "Pokemon flauta",
         it: "Flauto di Pokemon",
         pt: "Flauta Pokemon",
      },

      rarity: "Uncommon",
      category: "Trainer",

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
