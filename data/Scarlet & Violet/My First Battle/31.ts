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
			type: "normal",
			stamp: ["squirtle"],

			thirdParty: {
				cardmarket: 742018,
				tcgplayer: 524056
			}
		},
	],

	illustrator: "Akira Kamayama",
}

export default card