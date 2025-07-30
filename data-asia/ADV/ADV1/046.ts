import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "Sneasel Ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [215],
      hp: 80,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Darkness"],
          name: {
                        ja: "二重スクラッチ",
                                                                      },
          effect: {
                        ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
                                                                      },
        },
        {
          cost: ["Darkness", "Darkness", "Colorless"],
          name: {
                        ja: "beatります",
                                                                      },
          effect: {
                        ja: "プレイ中のポケモンごとにコインをひっくり返します（Sneasel Exを含む）。この攻撃は、ヘッド数の20倍のダメージを与えます。",
                                                                      },
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
