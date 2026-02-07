import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2011'

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
			en: "Quick Attack",
			fr: "Vive-Attaque"
		},

		damage: "10+",

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires."
		}
	}],

	variants: [
		{ type: 'holo', size: 'standard' }
	],

	name: {
		en: "Blitzle",
		fr: "Zébibron"
	},

	rarity: "None",
	hp: 60,
	types: ["Lightning"],

	thirdParty: {
		tcgplayer: 83929
	}
}

export default card