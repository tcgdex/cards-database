import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		en: "Growlithe",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Gnaw",
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			en: "Take Down",
		},

		damage: 50
	}],

	variants: [
		{
			type: "normal",
			stamp: ["charmander"],

			thirdParty: {
				cardmarket: 741992,
				tcgplayer: 524092
			}
		},
	],

	illustrator: "Mina Nakai",
}

export default card