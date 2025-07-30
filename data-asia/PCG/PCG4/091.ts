import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "Umbreon ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [197],
      hp: 110,
      types: ["Darkness"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "暗いリング",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）、あなたがあなたの手からUmbreon Exをプレイするとき、あなたのポカモンの1つを進化させるとき、あなたの対戦相手のベンチされたポカモンの1つのスイッチ1を防御するポカモンの1つと、対戦相手は、防御するポカモンを選択して切り替えます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ブラッククライ",
                                                                      },
          effect: {
                        ja: "防御するポケモンは、相手の次のターン中にポケパワーを退却したり、使用したりすることはできません。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
                        ja: "闇の牙",
                                                                      },
          damage: 60,
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
