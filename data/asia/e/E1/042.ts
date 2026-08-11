import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "マチョーク",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [67],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "パンチ",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "メガキック",
			},
			damage: 50,
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
