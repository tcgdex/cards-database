import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "カブトップス（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [141],
      hp: 100,
      types: ["Lightning"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
                        ja: "重要な排水",
                                                                      },
          effect: {
                        ja: "防御ポケモンがこの攻撃によってノックアウトされた場合、カブトップからすべての特別な条件と7つのダメージカウンターを削除します（すべてが7未満の場合はすべて）。",
                                                                      },
          damage: 30,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "雷鳴",
                                                                      },
          effect: {
                        ja: "カブトップスに取り付けられた各稲妻エネルギーに対して、40のダメージと10ダメージをさらに10ダメージします。",
                                                                      },
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
