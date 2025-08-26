import { Card } from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		ja: "エカン（デルタ種）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [23],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "噛む",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "テールスナップ",
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
