import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Dratini (Delta Species)",
         ja: "ドラチーニ（デルタ種）",
         fr: "Dratini (espèces delta)",
         de: "Dratini (Delta -Arten)",
         es: "Dratini (especie delta)",
         it: "Dratini (Delta Species)",
         pt: "Dratini (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [147],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Thunder Wave",
            ja: "サンダーウェーブ",
            fr: "Vague de tonnerre",
            de: "Donnerwelle",
            es: "Trueno",
            it: "Onda del tuono",
            pt: "Thunder Wave",
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
          stamp: ["1st edition"],
        },
      ],
};
