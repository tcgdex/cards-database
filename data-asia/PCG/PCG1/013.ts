import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Venonat",
         ja: "ヴェノナト",
         fr: "Venonat",
         de: "Venonat",
         es: "Venonat",
         it: "Venonat",
         pt: "Venonat",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [48],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Psycho Waves",
            ja: "サイコウェーブ",
            fr: "Vagues psycho",
            de: "Psychowellen",
            es: "Olas psicópatas",
            it: "Onde psicopatiche",
            pt: "Ondas psicopaciais",
          },
          effect: {
            en: "Discard an Energy card attached to Venonat. The Defending Pokemon is now Confused.",
            ja: "Venonatに取り付けられたエネルギーカードを廃棄します。防御ポケモンは今混乱しています。",
            fr: "Jeter une carte d'énergie attachée à Venonat. Le Pokémon en défense est maintenant confus.",
            de: "Verwerfen Sie eine an Venonat befestigte Energiekarte. Das verteidigende Pokemon ist jetzt verwirrt.",
            es: "Deseche una tarjeta de energía unida a Venonat. El Pokémon defensor ahora está confundido.",
            it: "Scartare una carta energetica attaccata a Venonat. Il Pokemon in carica è ora confuso.",
            pt: "Descarte um cartão de energia ligado ao Venonat. O Pokemon atual agora está confuso.",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
