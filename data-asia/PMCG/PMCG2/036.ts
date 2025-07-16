import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Meowth",
         ja: "meowth",
         fr: "Miaulement",
         de: "Meowth",
         es: "Maullido",
         it: "Meowth",
         pt: "MEOWTH",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [52],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
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
            en: "Flip a coin. If heads, draw a card.",
            ja: "コインをひっくり返します。頭の場合は、カードを描きます。",
            fr: "Retourner une pièce. Si les têtes, tracez une carte.",
            de: "Eine Münze drehen. Wenn Köpfe, zeichnen Sie eine Karte.",
            es: "Voltea una moneda. Si se dirige, dibuja una tarjeta.",
            it: "Capovolgi una moneta. Se la testa, disegna una carta.",
            pt: "Vire uma moeda. Se cabeças, desenhe uma carta.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
