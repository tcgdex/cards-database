import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Solrock",
		'fr-fr': "Solaroc",
		'es-es': "Solrock",
		'it-it': "Solrock",
		'pt-br': "Solrock",
		'de-de': "Sonnfel"
	},

	illustrator: "Kouji Tajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		338,
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
				"Colorless",
			],
			name: {
				'en-us': "Heat Burn",
				'fr-fr': "Chaleur Brûlante",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Explosion",
				'fr-fr': "Explosion",
			},
			effect: {
				'en-us': "This Pokémon does 90 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 90 dégâts.",
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

	retreat: 3,

	description: {
		'en-us': "Solar energy is the source of its power, so it is strong during the daytime. When it spins, its body shines.",
	},

	thirdParty: {
		cardmarket: 280814,
		tcgplayer: 89431
	}
}

export default card
