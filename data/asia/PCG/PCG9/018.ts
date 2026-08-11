import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スワブー（デルタ種）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [333],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "スプラッシュについて",
			},
			effect: {
				'ja-jp': "Swabluが防御ポケモンよりもエネルギーが少ない場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
