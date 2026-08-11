import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [516],

	name: {
		'en-us': "Simipour",
		'fr-fr': "Flotoutan",
		'es-es': "Simipour",
		'it-it': "Simipour",
		'pt-br': "Simipour",
		'de-de': "Sodachita"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Panpour",
		'fr-fr': "Flotajou",
		'es-es': "Panpour",
		'it-it': "Panpour",
		'pt-br': "Panpour",
		'de-de': "Sodamak"
	},

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revólver d'Água",
				'de-de': "Aquaknarre"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giga Impact",
				'fr-fr': "Giga Impact",
				'es-es': "Gigaimpacto",
				'it-it': "Gigaimpatto",
				'pt-br': "Gigaimpacto",
				'de-de': "Gigastoß"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon can't attack.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
				'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
				'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It prefers places with clean water. When its tuft runs low, it replenishes it by siphoning up water with its tail."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483089,
				tcgplayer: 219338
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483089,
				tcgplayer: 219338
			}
		},
	],
}

export default card
