import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Shellder",
         ja: "シェルダー",
         fr: "Chagrin",
         de: "Schellder",
         es: "Cáscara",
         it: "Shellder",
         pt: "Shellder",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [90],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Irongrip",
            ja: "Irongrip",
            fr: "Irongrip",
            de: "IRONGRIP",
            es: "Irongrip",
            it: "Irongrip",
            pt: "Irongrip",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Lick",
            ja: "なめる",
            fr: "Lécher",
            de: "Lecken",
            es: "Lamer",
            it: "Leccata",
            pt: "Lamber",
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
