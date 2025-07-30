import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "vigoroth",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [288],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "活発なオーラ",
                                                                      },
          effect: {
                        ja: "Vigorothがあなたのアクティブなポカモンである限り、各プレイヤーのアクティブなPokã©Mon（両方が2つある場合）による攻撃は、アクティブなPokã©Mon（脱力感と抵抗を適用する前に）にさらに10ダメージを与えます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "傷",
                                                                      },
          damage: 30,
        },
      ],

      retreat: 2,

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
