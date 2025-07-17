import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Pokmon Fan Club",
         ja: "ポケモンファンクラブ",
         fr: "Pokémon Fan Club",
         de: "Pokemon Fan Club",
         es: "Club de fanáticos de Pokemon",
         it: "Pokemon Fan Club",
         pt: "Pokemon Fan Club",
      },

      rarity: "Uncommon",
      category: "Trainer",

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
