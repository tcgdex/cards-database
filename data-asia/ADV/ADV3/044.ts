import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Bagon",
         ja: "バゴン",
         fr: "Bagon",
         de: "Bagon",
         es: "Bagón",
         it: "Bagon",
         pt: "Bagon",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [371],
      hp: 50,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
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
          cost: ["Fire", "Colorless"],
          name: {
            en: "Combustion",
            ja: "燃焼",
            fr: "Combustion",
            de: "Verbrennung",
            es: "Combustión",
            it: "Combustione",
            pt: "Combustão",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
