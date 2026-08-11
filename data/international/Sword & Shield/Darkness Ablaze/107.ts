import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [510],

	name: {
		'en-us': "Liepard",
		'fr-fr': "Léopardus",
		'es-es': "Liepard",
		'it-it': "Liepard",
		'pt-br': "Liepard",
		'de-de': "Kleoparda"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
		'es-es': "Purrloin",
		'it-it': "Purrloin",
		'pt-br': "Purrloin",
		'de-de': "Felilou"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Limber",
				'fr-fr': "Échauffement",
				'es-es': "Flexibilidad",
				'it-it': "Scioltezza",
				'pt-br': "Elasticidade",
				'de-de': "Flexibilität"
			},
			effect: {
				'en-us': "This Pokémon can't be Paralyzed.",
				'fr-fr': "Ce Pokémon ne peut pas être Paralysé.",
				'es-es': "Este Pokémon no puede pasar a estar Paralizado.",
				'it-it': "Questo Pokémon non può venire paralizzato.",
				'pt-br': "Este Pokémon não pode ser Paralisado.",
				'de-de': "Dieses Pokémon kann nicht paralysiert werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slashing Claw",
				'fr-fr': "Griffe Taillante",
				'es-es': "Garra Cuchillazo",
				'it-it': "Artigli Laceranti",
				'pt-br': "Garra Cortadora",
				'de-de': "Schlitzende Klaue"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Don't be fooled by its gorgeous fur and elegant figure. This is a moody and vicious Pokémon."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483414,
				tcgplayer: 219414
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483414,
				tcgplayer: 219414
			}
		},
	],
}

export default card
