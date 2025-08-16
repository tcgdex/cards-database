import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	description: {
		en: "It is very intelligent and calm. Being exposed to lots of sunlight makes its movements swifter."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Slam"
		},

		damage: "20×",

		effect: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Snivy"
	},

	rarity: "None",
	hp: 60,
	types: ["Grass"],

	thirdParty: {
		tcgplayer: 89378
	}
}

export default card