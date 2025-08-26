import { Card } from "../../../interfaces"
import Set from "../E1"

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
				ja: "ビート",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "骨スマッシュ",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 30,
		},
	],

	retreat: 1,

};

export default card
