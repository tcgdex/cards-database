import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "Bellossom",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [182],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass"],
          name: {
                        ja: "グリーンダンス",
                                                                      },
          effect: {
                        ja: "デッキを最大2匹の草ポケモンを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。草のポケモンを手に渡すと、ベンチのポケモンを1匹置いてBellossomを切り替えることができます。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "満開",
                                                                      },
          effect: {
                        ja: "少なくとも3つのBellossomがプレイされている場合、この攻撃は50のダメージと50のダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
