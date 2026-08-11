import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Palpitoad",
		'fr-fr': "Batracné",
		'es-es': "Palpitoad",
		'it-it': "Palpitoad",
		'pt-br': "Palpitoad",
		'de-de': "Mebrana"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		536,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Tympole",
		'fr-fr': "Tritonde",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Voice",
				'fr-fr': "Mégaphone",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When they vibrate the bumps on their heads, the can make wave in water or earthquake-like vibrations on land.",
	},

	thirdParty: {
		cardmarket: 280474,
		tcgplayer: 87924
	}
}

export default card
