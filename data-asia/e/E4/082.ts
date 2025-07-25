import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Star Piece",
         ja: "スターピース",
         fr: "Morceau d'étoile",
         de: "Sternstück",
         es: "Pieza estelar",
         it: "Pezzo stellare",
         pt: "Peça de estrela",
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
