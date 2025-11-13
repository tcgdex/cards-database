import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "槍",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [21],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "かみそりの風",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 20,
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
