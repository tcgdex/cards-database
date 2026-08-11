import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon",
		'de-de': "Kniltz"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [285],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stun Spore",
				'fr-fr': "Para-spore",
				'de-de': "Stachelspore"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It spouts poison spores from the top of its head. These spores cause pain all over if inhaled."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89186,
				cardmarket: 278818
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278818,
				tcgplayer: 89186
			}
		},
	],

}

export default card
