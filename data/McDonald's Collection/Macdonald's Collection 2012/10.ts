import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",

	description: {
		en: "Its skin has a rubbery elasticity, so it can reduce damage by defensively pulling its skin up to its neck."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Headbutt"
		},

		damage: 10
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Scraggy"
	},

	rarity: "None",
	hp: 60,
	types: ["Darkness"]
}

export default card