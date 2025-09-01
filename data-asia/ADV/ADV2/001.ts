import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
	set: Set,
	name: {
		ja: "種子",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [273],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "奇襲",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
