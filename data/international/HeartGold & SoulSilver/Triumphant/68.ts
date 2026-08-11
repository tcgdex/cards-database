import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magneti",
		'de-de': "Magnetilo"
	},

	illustrator: "Noriko Hotta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [81],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Magnetic Switch",
				'fr-fr': "Échange magnétique",
				'de-de': "Magnettausch"
			},
			effect: {
				'en-us': "Switch Magnemite with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Magneti avec l’un de vos Pokémon de Banc.",
				'de-de': "Tausche Magnetilo gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thundershock",
				'fr-fr': "Éclair",
				'de-de': "Donnerschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The units at the sides of its body generate antigravity energy to keep it aloft in the air."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87085,
				cardmarket: 279598
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279598,
				tcgplayer: 87085
			}
		},
		{
			type: "normal",
			stamp: ['gustavo-wada'],
			thirdParty: {
				tcgplayer: 480419
			}
		},
		{
			type: "normal",
			stamp: ['david-cohen'],
			thirdParty: {
				tcgplayer: 480420
			}
		},
	],

}

export default card
