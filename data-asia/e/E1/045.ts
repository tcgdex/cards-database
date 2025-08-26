import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "Pupitar",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [247],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "ヘッドバット",
			},
			damage: 20,
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
