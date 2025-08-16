import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "ルディコロ（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [272],
      hp: 100,
      types: ["Fire"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "熱心",
                                                                      },
          effect: {
                        ja: "対戦相手がPokã©Mon-Exをプレイしている場合、Ludicoloのそれぞれの攻撃は、Pokã©Monに30件のダメージを与えます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
                        ja: "ノックオフ",
                                                                      },
          effect: {
                        ja: "対戦相手の手から1枚のカードを探して廃棄せずに選択してください。",
                                                                      },
          damage: 30,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
                        ja: "ファイアパンチ",
                                                                      },
          damage: 60,
        },
      ],

      retreat: 2,

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
