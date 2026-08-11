import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スウェロー（デルタ種）",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [277],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "余分な翼",
			},
			effect: {
				'ja-jp': "ステージ2Pokã©Mon-Exのそれぞれのリトリートコストは0です。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				'ja-jp': "敏ility性",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、対戦相手の次のターン中にスウェローに行われたダメージを含む攻撃のすべての影響を防ぎます。",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
