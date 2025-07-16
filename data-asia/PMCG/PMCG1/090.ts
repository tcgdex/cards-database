import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Computer Search",
         ja: "コンピューター検索",
         fr: "Recherche d'ordinateur",
         de: "Computersuche",
         es: "Búsqueda de computadora",
         it: "Ricerca per computer",
         pt: "Pesquisa de computador",
      },

      rarity: "Rare",
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
