import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [129],
	set: Set,

	name: {
		en: "Lapras",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Surf",
		},

		damage: 50
	}],

	variants: [
		{
			type: "normal"
		},
	],

	illustrator: "Akira Kamayama",

	thirdParty: {
		cardmarket: 742018,
		tcgplayer: 524056
	}
}

export default card