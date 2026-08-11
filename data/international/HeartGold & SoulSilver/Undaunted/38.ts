import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Slowbro",
		'fr-fr': "Flagadoss",
		'de-de': "Lahmus"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [80],

	hp: 90,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Full-Belly Refresh",
				'fr-fr': "Régénération ventrale",
				'de-de': "Voller-Bauch-Heilung"
			},
			effect: {
				'en-us': "Remove all Special Conditions and 3 damage counters from Slowbro.",
				'fr-fr': "Retirez 3 marqueurs de dégât à Flagadoss, ainsi que tous ses États Spéciaux.",
				'de-de': "Entferne alle Speziellen Zustände und 3 Schadensmarken von Lahmus."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Startling Trip",
				'fr-fr': "Voyage surprenant",
				'de-de': "Verblüffende Reise"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, Slowbro is now Confused.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Confus. Si c’est pile, Flagadoss est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt. Bei \"Zahl\" ist Lahmus jetzt verwirrt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Naturally dull to begin with, it lost its ability to feel pain due to Shellder’s seeping poison."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279291,
				tcgplayer: 89308
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279291,
				tcgplayer: 89308
			}
		}
	],

}

export default card
