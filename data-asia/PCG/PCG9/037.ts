import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "Flygon ex（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [330],
      hp: 150,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "砂の損傷",
                                                                      },
          effect: {
                        ja: "Flygon Exがアクティブなポカモンである限り、ターンの間に対戦相手のベンチに入った基本的なポケモンに1つのダメージカウンターを置きます。 1つ以上の砂ダメージを使用することはできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
                        ja: "サイキックパルス",
                                                                      },
          effect: {
                        ja: "ダメージがカウンターを伴う相手のベンチ付きポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
          damage: 80,
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
