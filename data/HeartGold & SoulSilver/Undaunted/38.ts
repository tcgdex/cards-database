import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		de: "Lahmus"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Full-Belly Refresh",
				fr: "Régénération ventrale",
				de: "Voller-Bauch-Heilung"
			},
			effect: {
				en: "Remove all Special Conditions and 3 damage counters from Slowbro.",
				fr: "Retirez 3 marqueurs de dégât à Flagadoss, ainsi que tous ses États Spéciaux.",
				de: "Entferne alle Speziellen Zustände und 3 Schadensmarken von Lahmus."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Startling Trip",
				fr: "Voyage surprenant",
				de: "Verblüffende Reise"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, Slowbro is now Confused.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Confus. Si c’est pile, Flagadoss est maintenant Confus.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt. Bei \"Zahl\" ist Lahmus jetzt verwirrt."
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
		en: "Naturally dull to begin with, it lost its ability to feel pain due to Shellder’s seeping poison."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279291
	}
}

export default card
