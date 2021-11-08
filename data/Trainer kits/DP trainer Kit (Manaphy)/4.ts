import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	set: Set,

	name: {
		en: "Manaphy"
	},

	illustrator: "Daisuke Ito",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "Born on a cold seafloor, it will swim great distances to return to its birthplace."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Call for Family"
		},

		effect: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward."
		}
	}, {
		name: {
			en: "Aqua Ring"
		},

		damage: 30,

		effect: {
			en: "Switch Manaphy with 1 of your Benched Pokémon."
		}
	}]
}

export default card