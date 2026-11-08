import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	dexId: [522],

	description: {
		'en-us': "Its mane shines when it discharges electricity. They use their flashing manes to communicate with one another."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Quick Attack",
			'fr-fr': "Vive-Attaque"
		},

		damage: "10+",

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires."
		}
	}],

	name: {
		'en-us': "Blitzle",
		'fr-fr': "Zébibron"
	},

	rarity: "None",
	hp: 60,
	types: ["Lightning"],
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281795,
				tcgplayer: 83929
			}
		}
	]
}

export default card

