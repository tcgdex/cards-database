import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	description: {
		en: "Its mane shines when it discharges electricity. They use their flashing manes to communicate with one another."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Quick Attack"
		},

		damage: "10+",

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Blitzle"
	},

	rarity: "None",
	hp: 60,
	types: ["Lightning"],

	thirdParty: {
		tcgplayer: 83929
	}
}

export default card
