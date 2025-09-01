import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "シフトリー",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [275],
      hp: 120,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "ファンアウェイ",
                                                                      },
          effect: {
                        ja: "ターン中に（攻撃の前に）、コインをひっくり返すことができます。頭の場合は、ディフェンディングポカモンに取り付けられた1つのエネルギーカードを相手の手に返します。 Shiftryが特別な状態の影響を受けている場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Colorless", "Colorless"],
          name: {
                        ja: "ライトタッチスロー",
                                                                      },
          effect: {
                        ja: "防御ポケモンに付着した各エネルギーに対して、80のダメージを引いた10のダメージをマイナス10ダメージします。",
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

export default card
