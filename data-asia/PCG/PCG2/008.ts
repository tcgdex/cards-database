import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "美しい",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [267],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "おしゃべり",
                                                                      },
          effect: {
                        ja: "Beautiflyの残りのHPが40以下である限り、BeautiflyはPokã©Monに40個のダメージを与えます（脱力感と抵抗を適用する前）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
                        ja: "誘惑アンテナ",
                                                                      },
          effect: {
                        ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンの1つで切り替えることができます。もしそうなら、この攻撃は新しい防御ポケモンに20のダメージを与えます。対戦相手は、防御するポケモンを選択して切り替えます。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
                        ja: "風を切る",
                                                                      },
          damage: 50,
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
