import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Cofagrigus",
		'fr-fr': "Tutankafer",
		'es-es': "Cofagrigus",
		'it-it': "Cofagrigus",
		'pt-br': "Cofagrigus",
		'de-de': "Echnatoll"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		563,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Yamask",
		'fr-fr': "Tutafeh",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Damagriiigus",
				'fr-fr': "Tutankarnage",
			},
			effect: {
				'en-us': "Move all damage counters from 1 of your Benched Pokémon to the Defending Pokémon.",
				'fr-fr': "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de Banc vers le Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Perplex",
				'fr-fr': "Affolement",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It has been said that they swallow those who get too close and turn them into mummies. They like to eat gold nuggets.",
	},

	thirdParty: {
		cardmarket: 280169,
		tcgplayer: 84384
	}
}

export default card
