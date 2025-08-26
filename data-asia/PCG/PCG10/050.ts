import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "トラピンチ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [328],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "奇襲",
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
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
