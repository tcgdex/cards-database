import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Treecko",
         ja: "トレッコ",
         fr: "Trecko",
         de: "Treecko",
         es: "Treecko",
         it: "Treecko",
         pt: "Treecko",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [252],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Paralyzing Gaze",
            ja: "麻痺する視線",
            fr: "Regard paralysant",
            de: "Lähmendem Blick",
            es: "Mirada paralizante",
            it: "Sguardo paralizzante",
            pt: "Olhar paralisante",
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
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 20,
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
