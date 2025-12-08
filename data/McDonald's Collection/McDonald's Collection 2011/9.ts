import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	description: {
		en: "It changes into the forms of others to surprise them. Apparently, it often transforms into a silent child."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch"
		},

		damage: 10
	}, {
		name: {
			en: "Fury Swipes"
		},

		damage: "10×",

		effect: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Zorua"
	},

	rarity: "None",
	hp: 50,
	types: ["Darkness"],

	thirdParty: {
		tcgplayer: 90758
	}
}

export default card
