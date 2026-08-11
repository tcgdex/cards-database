import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Yamask",
		'fr-fr': "Tutafeh",
		'es-es': "Yamask",
		'it-it': "Yamask",
		'pt-br': "Yamask",
		'de-de': "Makabaja"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		562,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ambush",
				'fr-fr': "Embuscade",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "These Pokémon arose from the spirits of people interred in graves in past ages. Each retains memories of its former life.",
	},

	thirdParty: {
		cardmarket: 280167,
		tcgplayer: 90676
	}
}

export default card
