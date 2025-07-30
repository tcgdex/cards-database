import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "カメラプ",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [323],
      hp: 90,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "バックバーナー",
                                                                      },
          effect: {
                        ja: "廃棄の山を検索して、最大2枚の基本エネルギーカードを使用して、好きな方法でポケモンに取り付けます。",
                                                                      },
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
                        ja: "分割爆弾",
                                                                      },
          effect: {
                        ja: "対戦相手のポケモンの2つを選択してください。この攻撃は、それぞれに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
        },
      ],

      retreat: 2,

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
