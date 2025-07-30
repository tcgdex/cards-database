import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "オマニテ",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [138],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            ja: "進化の水",
          },
          effect: {
            ja: "Omanyteに手からオマスターを置きます。これは進化するオマニテとしてカウントされます。",
          },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            ja: "ドラッグします",
          },
          effect: {
            ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンに切り替えることができます。",
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
