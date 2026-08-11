import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャニーンのクロバット",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [169],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "超音速",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "スパイラルダイビング",
			},
			effect: {
				'ja-jp': "対戦相手の各ポケモンに10ダメージを与えます。衰弱や抵抗を適用しないでください。",
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
			stamp: ["1st-edition"],
		},
	],
};

export default card
