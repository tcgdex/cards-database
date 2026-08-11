import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Farfetch'd",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [83],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "旋風",
			},
			effect: {
				'ja-jp': "対戦相手は、ディフェンディングポケモンを1匹のベンチポケモンで切り替えます。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ネギのラッシュ",
			},
			effect: {
				'ja-jp': "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
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
			stamp: ["1st Edition"],
		},
	],
};

export default card
