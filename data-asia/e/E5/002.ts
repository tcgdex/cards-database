import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Weedle - 002/088",
         ja: "雑草-002/088",
         fr: "Weedle - 002/088",
         de: "Unkraut - 002/088",
         es: "Weedle - 002/088",
         it: "Weedle - 002/088",
         pt: "Weedle - 002/088",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [13],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Entangling Thread",
            ja: "絡み合ったスレッド",
            fr: "Fil d'intrication",
            de: "Verwickelner Faden",
            es: "Hilo enredado",
            it: "Thread intrecciato",
            pt: "Tópico em enredado",
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
          cost: ["Grass"],
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
