import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ミュー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [151],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [],

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
