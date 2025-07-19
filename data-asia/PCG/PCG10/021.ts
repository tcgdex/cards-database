import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Sealeo",
         ja: "シーレオ",
         fr: "Sealeo",
         de: "Sealeo",
         es: "Marina",
         it: "Sealeo",
         pt: "Sealeo",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [364],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Ice Beam",
            ja: "アイスビーム",
            fr: "Faisceau de glace",
            de: "Eisstrahl",
            es: "Haz de hielo",
            it: "Raggio di ghiaccio",
            pt: "Feixe de gelo",
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
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
