import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Dunsparce",
         ja: "ダンズパース",
         fr: "Dunsparce",
         de: "Schwachsinn",
         es: "Dunsparce",
         it: "Dunsparce",
         pt: "Dunsparce",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [206],
      hp: 30,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Glare",
            ja: "まぶしさ",
            fr: "Éblouissement",
            de: "Blendung",
            es: "Deslumbramiento",
            it: "Bagliore",
            pt: "Brilho",
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


      variants: [
        {
          type: "normal",
        },
      ],
};
