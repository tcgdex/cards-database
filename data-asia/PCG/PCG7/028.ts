import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "vileplume（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [45],
      hp: 90,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "毒花粉",
                                                                      },
          effect: {
                        ja: "ターン中に（攻撃の前に）、コインをひっくり返すことができます。頭の場合は、防御するpokã©monの1つを選択します。そのポカモンは現在毒されています。 vileplumeが特別な状態の影響を受けている場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Psychic", "Metal"],
          name: {
                        ja: "ポルターガイスト",
                                                                      },
          effect: {
                        ja: "相手の手を見てください。この攻撃は、30のダメージと、対戦相手の手の各トレーナーカードに対してさらに10ダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 1,

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
