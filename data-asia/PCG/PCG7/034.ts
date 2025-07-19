import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Holon's Castform",
         ja: "ホロンのキャストフォーム",
         fr: "Castform de Holon",
         de: "Holons Castform",
         es: "Castform de Holon",
         it: "Forma di cast di Holon",
         pt: "Holon's Castform",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [351],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Delta Draw",
            ja: "デルタドロー",
            fr: "Delta Draw",
            de: "Delta Draw",
            es: "Delta Draw",
            it: "Delta Draw",
            pt: "Delta Draw",
          },
          effect: {
            en: "Count the number of Pokemon you have in play that has Delta on its card. Draw up to that many cards.",
            ja: "カードにデルタを持っているポケモンの数を数えます。その多くのカードに作成します。",
            fr: "Comptez le nombre de pokemon que vous avez en jeu qui a delta sur sa carte. Appuyez sur autant de cartes.",
            de: "Zählen Sie die Anzahl der Pokemon, die Sie im Spiel haben, das Delta auf seiner Karte hat. Ziehen Sie so viele Karten an.",
            es: "Cuente el número de Pokémon que tienes en juego que tiene Delta en su carta. Elabore tantas cartas.",
            it: "Conta il numero di Pokemon che hai in gioco che ha Delta sulla sua carta. Esegui così tante carte.",
            pt: "Conte o número de Pokemon que você tem em jogo que tem Delta em sua carta. Faça com que tantas cartas.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
