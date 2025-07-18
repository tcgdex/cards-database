import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Flaaffy",
         ja: "フラフィー",
         fr: "Flaaffy",
         de: "Flaaffy",
         es: "Flafy",
         it: "Flaaffy",
         pt: "Flaaffy",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [180],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
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
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Thunder",
            ja: "雷",
            fr: "Tonnerre",
            de: "Donner",
            es: "Trueno",
            it: "Tuono",
            pt: "Trovão",
          },
          effect: {
            en: "Flaaffy does 10 damage to itself.",
            ja: "Flaaffyはそれ自体に10ダメージを与えます。",
            fr: "Flaaffy fait 10 dégâts à lui-même.",
            de: "Flaaffy schädigt sich 10.",
            es: "Flaaffy hace 10 daños a sí mismo.",
            it: "Flaaffy fa 10 danni a se stesso.",
            pt: "Flaaffy causa 10 danos a si mesmo.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
