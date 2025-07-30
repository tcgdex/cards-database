import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "ウェイルマー",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [320],
      hp: 80,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "休む",
                                                                      },
          effect: {
                        ja: "Wailmerからすべての特別な条件と4つのダメージカウンターを削除します（4つ未満の場合はすべて）。ウェイルマーは今眠っています。",
                                                                      },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
                        ja: "ウォーターガン",
                                                                      },
          effect: {
                        ja: "この攻撃は20のダメージに加えて、Wailmerに取り付けられた水エネルギーごとにさらに10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
                                                                      },
        },
      ],

      retreat: 3,

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
