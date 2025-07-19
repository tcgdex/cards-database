import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Kabuto",
         ja: "カブト",
         fr: "Kabuto",
         de: "Kabuto",
         es: "Kabuto",
         it: "Kabuto",
         pt: "Kabuto",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [140],
      hp: 60,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Ancient Protection",
            ja: "古代の保護",
            fr: "Protection ancienne",
            de: "Alter Schutz",
            es: "Protección antigua",
            it: "Antica protezione",
            pt: "Proteção antiga",
          },
          effect: {
            en: "Each of your Omanyte, Omastar, Kabuto, Kabutops, and Kabutops ex has no Weakness.",
            ja: "あなたのオマニテ、オマスター、カブト、カブトップス、カブトップスのそれぞれは弱点はありません。",
            fr: "Chacun de vos Omanyte, Omastar, Kabuto, Kabutops et Kabutops Ex n'a aucune faiblesse.",
            de: "Jedes Ihrer Omanyte, Omastar, Kabuto, Kabutops und Kabutops EX hat keine Schwäche.",
            es: "Cada uno de sus Omanyte, OmaStar, Kabuto, Kabutops y Kabutops EX no tiene debilidad.",
            it: "Ognuno dei tuoi Omanyte, Omastar, Kabuto, Kabutops e Kabutops Ex non ha debolezza.",
            pt: "Cada um de seus omanyte, OMASTAR, KABUTO, KABUTOPS e KABUTOPS EX não tem fraqueza.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Granite Head",
            ja: "花崗岩の頭",
            fr: "Tête de granit",
            de: "Granitkopf",
            es: "Cabeza de granito",
            it: "Testa di granito",
            pt: "Cabeça de granito",
          },
          effect: {
            en: "During your opponent's next turn, any damage done to Kabuto by attacks is reduced by 10 (after applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中、攻撃によってカブトに与えられた損害は10増加します（脱力感と抵抗を適用した後）。",
            fr: "Au cours du prochain virage de votre adversaire, tout dommage causé à Kabuto par des attaques est réduit de 10 (après avoir appliqué une faiblesse et une résistance).",
            de: "Während der nächsten Kurve Ihres Gegners wird jeder Schaden, den Kabuto durch Angriffe angerichtet hat, um 10 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Durante el próximo turno de tu oponente, cualquier daño hecho a Kabuto por ataques se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Durante il prossimo turno dell'avversario, qualsiasi danno arrecato a Kabuto dagli attacchi viene ridotto di 10 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Durante o próximo turno do seu oponente, qualquer dano causado a Kabuto por ataques é reduzido em 10 (após aplicar fraqueza e resistência).",
          },
          damage: 20,
        },
      ],

      retreat: 2,

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
