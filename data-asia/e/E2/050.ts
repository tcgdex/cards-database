import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "キューボン",
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
				ja: "涙目",
			},
			effect: {
				ja: "対戦相手の次のターン中に、攻撃によってキューボンに与えられた損害は20倍に減少します。",
			},
		},
		{
			cost: ["Fighting"],
			name: {
				ja: "取り組む",
			},
			damage: 10,
		},
	],

	retreat: 1,

};

export default card
