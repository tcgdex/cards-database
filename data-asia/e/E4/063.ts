import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "ペルシャ語",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [53],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            ja: "サプライズスラッシュ",
          },
          effect: {
            ja: "コインをひっくり返します。頭の場合は、相手の手を見てください。彼または彼女がそこにトレーナーカードを持っている場合は、それらの1つを選択してください。対戦相手はそのカードを彼または彼女のデッキにシャッフルします。",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            ja: "突進",
          },
          effect: {
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
          },
          damage: 50,
        },
      ],


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
