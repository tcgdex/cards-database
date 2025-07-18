import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Whitney's Lickitung",
         ja: "ホイットニーのリキトゥン",
         fr: "Lickitung de Whitney",
         de: "Whitneys Lickitung",
         es: "Whitney's Lickitung",
         it: "Whitney's Lickitung",
         pt: "Whitney's Lickitung",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [108],
      hp: 70,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
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
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Tail Slap",
            ja: "テールスラップ",
            fr: "Gifle",
            de: "Schwanzschlag",
            es: "Bofetada",
            it: "Slap di coda",
            pt: "Tail Slap",
          },
          damage: 30,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
