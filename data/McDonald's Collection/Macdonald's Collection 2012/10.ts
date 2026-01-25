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
			en: "Headbutt",
			fr: "Coup d'Boule"
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
		en: "Scraggy",
		fr: "Baggiguane"
	},

	rarity: "None",
	hp: 60,
	types: ["Darkness"],

	thirdParty: {
		tcgplayer: 88986
	}
}

export default card