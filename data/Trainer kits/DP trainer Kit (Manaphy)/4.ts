import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	dexId: [490],
	set: Set,

	name: {
		en: "Manaphy"
	},

	illustrator: "Daisuke Ito",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 70,

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Call for Family"
		},
		effect: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward."
		}
	}, {
		cost: [
			"Water",
			"Water"
		],
		name: {
			en: "Aqua Ring"
		},
		effect: {
			en: "Switch Manaphy with 1 of your Benched Pokémon."
		},
		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "20+"
		}
	],

	description: {
		en: "Born on a cold seafloor, it will swim great distances to return to its birthplace."
	},

	retreat: 1

}

export default card
