import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Dugtrio",
         ja: "ブロックのdugtrio",
         fr: "Brock's Dugtrio",
         de: "Brocks Dugtrio",
         es: "Dugtrio de Brock",
         it: "Brock's Dugtrio",
         pt: "Dugtrio de Brock",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [51],
      hp: 60,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Lie Low",
            ja: "低く横になる",
            fr: "Se cacher",
            de: "Sich niedrig liegen",
            es: "Estar agazapado",
            it: "Mentire basso",
            pt: "Mentir baixo",
          },
          effect: {
            en: "All damage done to Brock's Dugtrio during your opponent's next turn is reduced by 20 (after applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中にブロックのDugtrioに与えられたすべての損害は、20（脱力感と抵抗を適用した後）に20減ります。",
            fr: "Tous les dégâts causés au Dugtrio de Brock pendant le prochain virage de votre adversaire sont réduits de 20 (après avoir appliqué une faiblesse et une résistance).",
            de: "Alle Schäden an Brocks Dugtrio während der nächsten Kurve Ihres Gegners werden um 20 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Todo el daño causado al Dugtrio de Brock durante el próximo turno de tu oponente se reduce en 20 (después de aplicar debilidad y resistencia).",
            it: "Tutti i danni arrecati a Dugtrio di Brock durante il prossimo turno dell'avversario sono ridotti di 20 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Todos os danos causados ao Dugtrio de Brock durante o próximo turno do seu oponente são reduzidos em 20 (após aplicar fraqueza e resistência).",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Earthdrill",
            ja: "アースドリル",
            fr: "Terrassement",
            de: "Earthdrill",
            es: "Earthdrill",
            it: "Terra di terra",
            pt: "Earthdrill",
          },
          effect: {
            en: "This attack can't be used unless Brock's Dugtrio used its Lie Low attack last turn.",
            ja: "この攻撃は、BrockのDugtrioが昨年ターンのLie Low Attackを使用していない限り使用できません。",
            fr: "Cette attaque ne peut être utilisée à moins que Brock's Dugtrio n'utilisait son dernier tour à basse attaque.",
            de: "Dieser Angriff kann nur verwendet werden, wenn Brocks Dugtrio in letzter Runde seinen Lüge mit niedrigem Angriff benutzte.",
            es: "Este ataque no se puede usar a menos que el Dugtrio de Brock use su mentira de ataque bajo en el último turno.",
            it: "Questo attacco non può essere usato a meno che Dugtrio di Brock non abbia usato il suo attacco a bassa menzogna.",
            pt: "Esse ataque não pode ser usado, a menos que o Dugtrio de Brock tenha usado seu ataque baixo no último ataque.",
          },
          damage: 60,
        },
      ],

      retreat: 1,

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
