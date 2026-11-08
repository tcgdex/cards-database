import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "M Charizard EX",
		'fr-fr': "M-Dracaufeu EX",
		'es-es': "M-Charizard EX",
		'it-it': "M Charizard EX",
		'pt-br': "M-Charizard EX",
		'de-de': "M-Glurak EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 220,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charizard-EX",
		'fr-fr': "Dracaufeu-EX",
		'es-es': "Charizard-EX",
		'it-it': "Charizard-EX",
		'pt-br': "Charizard-EX",
		'de-de': "Glurak-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crimson Dive",
				'fr-fr': "Plongeon Écarlate",
				'es-es': "Picado Carmesí",
				'it-it': "Tufforosso",
				'pt-br': "Mergulho Carmim",
				'de-de': "Feuerroter Sturzflug"
			},
			effect: {
				'en-us': "This Pokémon does 50 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 50 dégâts.",
				'es-es': "Este Pokémon se hace 50 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 50 danni a se stesso.",
				'pt-br': "Este Pokémon causa 50 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 50 Schadenspunkte zu."
			},
			damage: 300,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 124114
	}
}

export default card
