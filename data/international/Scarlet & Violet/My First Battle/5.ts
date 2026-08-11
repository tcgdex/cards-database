import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [102],
	set: Set,

	name: {
		en: "Exeggcute",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Rollout",
		},

		damage: 40
	}],

	variants: [
		{
			type: "normal",
			stamp: ["bulbasaur"],

			thirdParty: {
				cardmarket: 741980,
				tcgplayer: 524013
			}
		},
	],

	illustrator: "Jerky",
}

export default card