import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Nidorino",
         ja: "ニドリーノ",
         fr: "Nidorino",
         de: "Nidorino",
         es: "Nido",
         it: "Nidorino",
         pt: "Nidorino",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [33],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
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
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Take Down",
            ja: "降ろす",
            fr: "Démonter",
            de: "Notieren",
            es: "Derribar",
            it: "Prendere nota",
            pt: "Derrubar",
          },
          effect: {
            en: "Nidorino does 10 damage to itself.",
            ja: "ニドリーノはそれ自体に10ダメージを与えます。",
            fr: "Nidorino fait 10 dégâts à lui-même.",
            de: "Nidorino schädigt sich 10.",
            es: "Nidorino hace 10 daños a sí mismo.",
            it: "Nidorino fa 10 danni a se stesso.",
            pt: "Nidorino causa 10 danos a si mesmo.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
