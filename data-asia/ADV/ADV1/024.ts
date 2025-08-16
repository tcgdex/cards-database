import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "電気",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [309],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
                        ja: "充電",
                                                                      },
          effect: {
                        ja: "廃棄の山からエレクトリケに稲妻エネルギーカードを取り付けます。",
                                                                      },
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
                        ja: "サンダージョルト",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。尾の場合、エレクトリケはそれ自体に10ダメージを与えます。",
                                                                      },
          damage: 30,
        },
      ],

      retreat: 1,

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
