import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キューボン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [104],
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "涙目",
			},
			effect: {
				'ja-jp': "対戦相手の次のターン中に、攻撃によってキューボンに与えられた損害は20倍に減少します。",
			},
		},
		{
			cost: ["Fighting"],
			name: {
				'ja-jp': "取り組む",
			},
			damage: 10,
		},
	],

	retreat: 1,

};

export default card
