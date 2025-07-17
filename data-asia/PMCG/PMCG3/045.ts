import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Gambler",
         ja: "ギャンブラー",
         fr: "Joueur",
         de: "Spieler",
         es: "Jugador",
         it: "Giocatore",
         pt: "Jogador",
      },

      rarity: "Common",
      category: "Trainer",

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
