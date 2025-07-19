import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Vibrava",
         ja: "ビブラバ",
         fr: "Vibrava",
         de: "Vibrava",
         es: "Vibrava",
         it: "Vibrava",
         pt: "Vibrava",
      },


      category: "Pokemon",
      dexId: [329],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Ram",
            ja: "ラム",
            fr: "Bélier",
            de: "RAM",
            es: "RAM",
            it: "RAM",
            pt: "Bater",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Lightning", "Colorless"],
          name: {
            en: "Dragonbreath",
            ja: "ドラゴンブース",
            fr: "Dragonbreath",
            de: "Dragonbreath",
            es: "Dragonbreath",
            it: "Dragonbreath",
            pt: "Dragonbreath",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 60,
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
