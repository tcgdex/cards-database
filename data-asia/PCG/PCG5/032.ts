import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "ゴアビー",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [368],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "反応ブースター",
                                                                      },
          effect: {
                        ja: "すべてのHuntailとGorebyssに取り付けられた各React Energyカードは、あらゆるタイプの2つのエネルギーを提供しますが、エネルギーを提供する以外に効果はありません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
                        ja: "ハイドロポンプ",
                                                                      },
          effect: {
                        ja: "30のダメージに加えて、Gorebyssに取り付けられた水エネルギーごとに20のダメージがさらに20件ありますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で40以上のダメージを追加することはできません。",
                                                                      },
        },
      ],


      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
