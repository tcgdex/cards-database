import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Mankey (Delta Species)",
         ja: "マンキー（デルタ種）",
         fr: "Mankey (espèce delta)",
         de: "Mankey (Delta -Arten)",
         es: "Mankey (especie delta)",
         it: "Mankey (Delta Species)",
         pt: "Mankey (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [56],
      hp: 50,
      types: ["Fire"],
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
          cost: ["Fire", "Colorless"],
          name: {
            en: "Low Kick",
            ja: "ローキック",
            fr: "Coup de pied bas",
            de: "Niedriger Kick",
            es: "Patada baja",
            it: "Calcio basso",
            pt: "Kick baixo",
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
