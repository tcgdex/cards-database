import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Ferroseed",
		'fr-fr': "Grindur",
		'es-es': "Ferroseed",
		'it-it': "Ferroseed",
		'pt-br': "Ferroseed",
		'de-de': "Kastadur"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		597,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Self Destruct",
				'fr-fr': "Destruction",
			},
			effect: {
				'en-us': "This Pokémon does 60 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 60 dégâts.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "When threatened, it attacks by shooting a barrage of spikes, which gives it a chance to escape by rolling away.",
	},

	thirdParty: {
		cardmarket: 280302,
		tcgplayer: 85427
	}
}

export default card
