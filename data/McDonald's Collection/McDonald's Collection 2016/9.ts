import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "HiRON",
	category: "Pokemon",

	dexId: [175],

	description: {
		en: "A proverb claims that happiness will come to anyone who can make a sleeping Togepi stand up."
	},

	hp: 40,

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sweet Kiss",
			fr: "Doux Baiser"
		},

		damage: 10,

		effect: {
			en: "Your opponent draws a card."
		}
	}],

	name: {
		en: "Togepi",
		fr: "Togepi"
	},

	rarity: "None",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 295145,
				tcgplayer: 275065
			}
		}
	]
}

export default card
