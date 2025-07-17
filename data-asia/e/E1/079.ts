import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Kingler - 079/128",
         ja: "キングラー-079/128",
         fr: "Kingler - 079/128",
         de: "Kingler - 079/128",
         es: "Kingler - 079/128",
         it: "Kingler - 079/128",
         pt: "Kingler - 079/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [99],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Bubble",
            ja: "バブル",
            fr: "Bulle",
            de: "Blase",
            es: "Burbuja",
            it: "Bolla",
            pt: "Bolha",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Giant Claw",
            ja: "巨大な爪",
            fr: "Griffe géante",
            de: "Riesenklaue",
            es: "Garra gigante",
            it: "Artiglio gigante",
            pt: "Garra gigante",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 70,
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
