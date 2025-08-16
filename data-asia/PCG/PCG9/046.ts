import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "Kingdra Ex（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [230],
      hp: 140,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "余分な煙",
                                                                      },
          effect: {
                        ja: "敵の攻撃によってステージ2のPokã©Mon-Exに与えられた損害は10倍に減少します（脱力感と抵抗を適用する前に）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
                        ja: "エネルギーリンク",
                                                                      },
          effect: {
                        ja: "廃棄物の山を検索して、エネルギーカードを添付し、kingdra exに取り付けます。",
                                                                      },
          damage: 40,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
                        ja: "保護渦",
                                                                      },
          effect: {
                        ja: "Kingdra Exは、対戦相手の次のターン中に弱点はありません。",
                                                                      },
          damage: 80,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
