import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "onix",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [95],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "金切り声",
			},
			effect: {
				'ja-jp': "次のターンの終わりまで、攻撃が防御ポケモンに損傷を与えた場合（脱力感と抵抗を適用した後）、その攻撃は防御ポケモンに20回以上のダメージを与えます。",
			},
		},
		{
			cost: ["Fighting", "Fighting"],
			name: {
				'ja-jp': "怒り",
			},
			effect: {
				'ja-jp': "Onixのダメージカウンターごとに10のダメージと10ダメージがさらに10件のダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
