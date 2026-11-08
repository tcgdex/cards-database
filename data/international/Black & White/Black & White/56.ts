import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Duosion",
		'fr-fr': "Méios",
		'es-es': "Duosion",
		'it-it': "Duosion",
		'pt-br': "Duosion",
		'de-de': "Mitodos"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		578,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Solosis",
		'fr-fr': "Nucléos",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Recover",
				'fr-fr': "Soin",
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon and heal all damage from this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon et soignez tous les dégâts de ce Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When their brains, now divided in two, are thinking the same thought, these Pokémon exhibit their maximum power.",
	},

	thirdParty: {
		cardmarket: 279794,
		tcgplayer: 85016
	}
}

export default card
