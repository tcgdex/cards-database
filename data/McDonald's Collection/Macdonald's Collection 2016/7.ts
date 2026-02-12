import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Tomokazu Komiya",
	category: "Pokemon",

	description: {
		en: "Its skin has a rubbery elasticity, so it can reduce damage by defensively pulling it skin up to its neck."
	},
	

	types: ["Darkness",],

	stage: "Basic",

	attacks: [{
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon"
		},

		damage: 30
	}],

	name: {
		en: "Scraggy",
		fr: "Baggiguane"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275063
	}
}

export default card