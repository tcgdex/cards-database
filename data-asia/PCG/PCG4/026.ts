import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "feraligatr",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [160],
      hp: 120,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "恐ろしい牙",
                                                                      },
          effect: {
                        ja: "FeraligatrがアクティブなPokã©Monである限り、相手の攻撃によって与えられた損害は10増加します（脱力感と抵抗を適用する前）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
                        ja: "引き離します",
                                                                      },
          effect: {
                        ja: "相手が手に5枚以上のカードを持っている場合、対戦相手が4枚のカードが残っているまで、相手は多数のカードを破棄します。",
                                                                      },
          damage: 30,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
                        ja: "トン数",
                                                                      },
          effect: {
                        ja: "50ダメージに加えて30ダメージを与えることができます。もしそうなら、Feraligatrはそれ自体に30のダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 2,

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
