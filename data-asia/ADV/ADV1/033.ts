import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Makuhita",
         ja: "マクヒタ",
         fr: "Makuhita",
         de: "Makuhita",
         es: "Makuhita",
         it: "Makuhita",
         pt: "Makuhita",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [296],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Fake Out",
            ja: "偽物",
            fr: "Truquer",
            de: "Fälschung aus",
            es: "Fingir",
            it: "Falsificare",
            pt: "Fake Out",
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
