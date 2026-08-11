import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カレンの猟犬",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [229],
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ro音",
			},
			effect: {
				'ja-jp': "相手がベンチ付きポケモンを持っている場合は、コインをひっくり返します。頭の場合、彼または彼女は、ディフェンディングポケモンをそれらの1つと交換します。",
			},
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				'ja-jp': "燃える息",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、カレンの猟犬に取り付けられた1つのファイアエネルギーカードを捨ててください。この攻撃は20のダメージと20ダメージを与えます。",
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
