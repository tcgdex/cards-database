import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Patrat",
		'fr-fr': "Ratentif",
		'es-es': "Patrat",
		'it-it': "Patrat",
		'pt-br': "Patrat",
		'de-de': "Nagelotz"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		504,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Patrol",
				'fr-fr': "Patrouille",
			},
			effect: {
				'en-us': "Look at the top 3 cards of your deck and put them back on top of your deck in any order.",
				'fr-fr': "Regardez les 3 cartes du dessus de votre deck et replacez-les sur le dessus de votre deck dans l'ordre de votre choix.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Extremely cautious, one of them will always be on the lookout, but it won't notice a foe coming from behind.",
	},

	thirdParty: {
		cardmarket: 280705,
		tcgplayer: 87964
	}
}

export default card
