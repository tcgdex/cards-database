import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Horsea - 033/087",
         ja: "Horsea -033/087",
         fr: "Horsea - 033/087",
         de: "Horsea - 033/087",
         es: "Horsea - 033/087",
         it: "Horsea - 033/087",
         pt: "Horsea - 033/087",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [116],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

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
