import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "Salamence ex（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [373],
      hp: 160,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "タイプシフト",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃前）に、このパワーを使用できます。 Salamence Exのタイプは、あなたのターンの終わりまで火災です。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
                        ja: "爪のスワイプ",
                                                                      },
          damage: 60,
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
                        ja: "デュアルストリーム",
                                                                      },
          effect: {
                        ja: "防御ポケモンに対して80ではなく40ダメージを与えることができます。もしそうなら、この攻撃は、相手のベンチ付きポケモンの1つに40ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
