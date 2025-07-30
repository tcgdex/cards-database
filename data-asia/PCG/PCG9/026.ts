import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "feraligatr（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [160],
      hp: 120,
      types: ["Lightning"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "戦いオーラ",
                                                                      },
          effect: {
                        ja: "カード上にあるPokã©Monはそれぞれ、防御するPokã©Monに10個のダメージを与えます（脱力感と抵抗を適用する前）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "ドラッグします",
                                                                      },
          effect: {
                        ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンの1つで切り替えることができます。対戦相手は、防御するポケモンを選択して切り替えます。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
                        ja: "鋭い牙",
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
