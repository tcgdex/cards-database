import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "トロピウス",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [357],
      hp: 80,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "熱帯運動",
                                                                      },
          effect: {
                        ja: "トロピウスがあなたのアクティブなポカモンである限り、あなたの対戦相手のアクティブなポケモンには抵抗がありません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
                        ja: "奇跡の打撃",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合は、1つの特別な条件を選択します。防御ポケモンは現在、その特別な状態の影響を受けています。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "踏みつけ",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて20ダメージを与えます。",
                                                                      },
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
