import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "電気",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [309],
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "スニッフアウト",
			},
			effect: {
				'ja-jp': "廃棄の山から1枚のカードを手に入れます。",
			},
		},
		{
			cost: ["Lightning"],
			name: {
				'ja-jp': "素早い打撃",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

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
