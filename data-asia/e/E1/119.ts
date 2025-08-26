import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ミュー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [151],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
