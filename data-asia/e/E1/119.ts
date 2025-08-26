import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "Mew -119/128",
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
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
