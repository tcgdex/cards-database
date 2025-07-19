import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Meowth (Delta Species)",
         ja: "Meowth（デルタ種）",
         fr: "Meowth (espèces delta)",
         de: "Meowth (Delta -Arten)",
         es: "Meowth (especie delta)",
         it: "Meowth (Delta Species)",
         pt: "MEOWTH (espécies Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [52],
      hp: 50,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Darkness"],
          name: {
            en: "Slash",
            ja: "スラッシュ",
            fr: "Sabrer",
            de: "Schrägstrich",
            es: "Barra oblicua",
            it: "Barra",
            pt: "Slash",
          },
          damage: 10,
        },
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Pay Day",
            ja: "給料日",
            fr: "Jour de paie",
            de: "Zahltag",
            es: "Día de pago",
            it: "Giorno di paga",
            pt: "Dia de pagamento",
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
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
