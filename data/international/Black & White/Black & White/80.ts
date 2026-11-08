import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Lillipup",
		'fr-fr': "Ponchiot",
		'es-es': "Lillipup",
		'it-it': "Lillipup",
		'pt-br': "Lillipup",
		'de-de': "Yorkleff"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		506,
	],

	hp: 50,

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
				'en-us': "Pickup",
				'fr-fr': "Ramassage",
			},
			effect: {
				'en-us': "Put an Item card from your discard pile into your hand.",
				'fr-fr': "Prenez une carte Objet dans votre pile de défausse et ajoutez-la à votre main.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
			},

			damage: 10,

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
		'en-us': "It faces strong opponents with great courage. But, when at a disadvantage in a fight, this intelligent Pokémon flees.",
	},

	thirdParty: {
		cardmarket: 279818,
		tcgplayer: 86797
	}
}

export default card
