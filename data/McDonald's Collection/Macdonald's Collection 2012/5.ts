import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",


	dexId: [502],
	description: {
		en: "Scalchop techniques differ from one Dewott to another. It never neglects maintaining its scalchops."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Water Gun"
		},

		damage: 30
	}, {
		name: {
			en: "Razor Shell"
		},

		damage: "40+",

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Dewott"
	},

	rarity: "None",
	hp: 90,
	types: ["Water"],

	thirdParty: {
		tcgplayer: 84797
	}
}

export default card