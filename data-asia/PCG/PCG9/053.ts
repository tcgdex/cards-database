import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Nidoran (Delta Species)",
         ja: "ニドラン（デルタ種）",
         fr: "Nidoran (espèce delta)",
         de: "Nidoran (Delta -Arten)",
         es: "Nidoran (especie delta)",
         it: "Nidoran (Delta Species)",
         pt: "Nidoran (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [Unknown],
      hp: 40,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Peck",
            ja: "ペック",
            fr: "Picorer",
            de: "Picken",
            es: "Picotear",
            it: "Peck",
            pt: "Peck",
          },
          damage: 10,
        },
        {
          cost: ["Darkness"],
          name: {
            en: "Poison Horn",
            ja: "ポイズンホーン",
            fr: "Corne de poison",
            de: "Gifthorn",
            es: "Bocina",
            it: "Corno veleno",
            pt: "Chifre de veneno",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado.",
          },
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
