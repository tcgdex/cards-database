import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Hitmonchan",
		'fr-fr': "Tygnon",
		'es-es': "Hitmonchan",
		'it-it': "Hitmonchan",
		'pt-br': "Hitmonchan",
		'de-de': "Nockchan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Jab",
				'fr-fr': "Taquet",
				'es-es': "Puya",
				'it-it': "Stoccata",
				'pt-br': "Golpe",
				'de-de': "Boxschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Special Punch",
				'fr-fr': "Punch spécial",
				'es-es': "Puñetazo Especial",
				'it-it': "Pugno Speciale",
				'pt-br': "Soco Especial",
				'de-de': "Spezialhieb"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The spirit of a pro boxer has infused this Pokémon. It throws punches that are faster than a bullet train.",
	},

	thirdParty: {
		cardmarket: 293415,
		tcgplayer: 124075
	}
}

export default card
