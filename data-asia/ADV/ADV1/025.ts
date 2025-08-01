import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "マネクリック",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [310],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "電流を引き付けます",
                                                                      },
          effect: {
                        ja: "デッキを稲妻エネルギーカードに検索し、1枚のポケモンに添付してください。その後、デッキをシャッフルします。",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
                        ja: "サンダージョルト",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。尾の場合、Manectricはそれ自体に10ダメージを与えます。",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 1,

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
