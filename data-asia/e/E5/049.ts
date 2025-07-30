import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         ja: "Dugtrio",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [51],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            ja: "バロウ",
          },
          effect: {
            ja: "コインをひっくり返します。頭の場合は、相手の次のターン中にDugtrioに攻撃によって行われたすべての損害を防ぎます。 （攻撃の他の影響はまだ発生しています。）",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            ja: "下を掘ります",
          },
          effect: {
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。衰弱や抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
