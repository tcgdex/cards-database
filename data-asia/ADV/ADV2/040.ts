import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Zigzagoon",
         ja: "ジグザグーン",
         fr: "Zigzagoon",
         de: "Zick -Zazoon",
         es: "Zigzagoon",
         it: "Zigzagoon",
         pt: "Zigzagoon",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [263],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Collect",
            ja: "集める",
            fr: "Collecter",
            de: "Sammeln",
            es: "Recolectar",
            it: "Raccogliere",
            pt: "Coletar",
          },
          effect: {
            en: "Draw a card.",
            ja: "カードを描きます。",
            fr: "Dessinez une carte.",
            de: "Zeichnen Sie eine Karte.",
            es: "Dibuja una carta.",
            it: "Disegna una carta.",
            pt: "Desenhe uma carta.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Headbutt",
            ja: "ヘッドバット",
            fr: "Coup de tête",
            de: "Headbutt",
            es: "Cabezal",
            it: "Headbutt",
            pt: "Cabeça",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
