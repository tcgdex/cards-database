import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "Exploud Ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [295],
      hp: 150,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "余分なノイズ",
                                                                      },
          effect: {
                        ja: "Exploud ExがアクティブなPokã©Monである限り、ターンの間に対戦相手のPokã©Mon-Exのそれぞれに1つのダメージカウンターを入れます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "脱線",
                                                                      },
          effect: {
                        ja: "防御ポケモンに取り付けられた特別なエネルギーカードを捨てます。",
                                                                      },
          damage: 40,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "ハイパーテール",
                                                                      },
          effect: {
                        ja: "防御するポケモンにポケーパーズまたはポケボディがある場合、この攻撃は60のダメージと20のダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 3,

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
