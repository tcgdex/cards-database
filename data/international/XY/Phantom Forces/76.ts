import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Sliggoo",
		'fr-fr': "Colimucus",
		'es-es': "Sliggoo",
		'it-it': "Sliggoo",
		'pt-br': "Sliggoo",
		'de-de': "Viscargot"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		705,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Goomy",
		'fr-fr': "Mucuscule",
		'es-es': "Goomy",
		'it-it': "Goomy",
		'pt-br': "Goomy",
		'de-de': "Viscora"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gooey",
				'fr-fr': "Poisseux",
				'es-es': "Baba",
				'it-it': "Viscosità",
				'pt-br': "Pegajoso",
				'de-de': "Viskosität"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 de danos deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Gentle Slap",
				'fr-fr': "Gifle Douce",
				'es-es': "Bofetada Gentil",
				'it-it': "Schiaffetto",
				'pt-br': "Tapinha",
				'de-de': "Sanfter Hieb"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It drives away opponents by excreting a sticky liquid that can dissolve anything. Its eyes devolved, so it can't see anything.",
	},

	thirdParty: {
		cardmarket: 281882,
		tcgplayer: 94644
	}
}

export default card
