import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ファンピー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [231],
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "取り組む",
			},
			damage: 10,
		},
		{
			cost: ["Fighting"],
			name: {
				'ja-jp': "耐える",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、ファンピーが攻撃によってノックアウトされた場合、ファンピーはノックアウトされず、代わりに残りのHPが10になります。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
