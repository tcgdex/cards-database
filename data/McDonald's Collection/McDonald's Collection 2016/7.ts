import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Tomokazu Komiya",
	category: "Pokemon",

	dexId: [559],

	description: {
		en: "Its skin has a rubbery elasticity, so it can reduce damage by defensively pulling it skin up to its neck."
	},

	hp: 60,

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

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 295143,
				tcgplayer: 275063
			}
		}
	]
}

export default card
