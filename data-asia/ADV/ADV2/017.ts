import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "アズマリル",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [184],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "霧雨",
                                                                      },
          effect: {
                        ja: "手に水エネルギーカードがある場合は、アクティブなポケモンのいずれかに好きなだけ多くの水エネルギーカードを取り付けます。",
                                                                      },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
                        ja: "マックスバブル",
                                                                      },
          effect: {
                        ja: "すべてのアクティブなポケモンに取り付けられた各エネルギーのコインをひっくり返します。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
                                                                      },
        },
      ],

      retreat: 1,

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

export default card
