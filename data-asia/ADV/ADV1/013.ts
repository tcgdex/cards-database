import {Card} from "../../../interfaces"
import Set from "../ADV1"

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
          cost: ["Fire", "Colorless"],
          name: {
                        ja: "溶岩燃焼",
                                                                      },
          effect: {
                        ja: "対戦相手のベンチポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Fire", "Fire", "Colorless", "Colorless"],
          name: {
                        ja: "火のスピン",
                                                                      },
          effect: {
                        ja: "カメルアップに取り付けられた2つの基本的なエネルギーカードを廃棄するか、この攻撃は何もしません。",
                                                                      },
          damage: 100,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
