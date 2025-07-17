import {Card} from "../../../interfaces"
import Set from "../E1"

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
          cost: ["Colorless"],
          name: {
            en: "Double Scratch",
            ja: "二重スクラッチ",
            fr: "À double égratignure",
            de: "Doppelkratzer",
            es: "Doble rasguño",
            it: "Doppio graffio",
            pt: "Arranhão duplo",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
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
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
