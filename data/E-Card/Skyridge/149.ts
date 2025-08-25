import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Ho-oh",
		de: "Ho-oh"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		250,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
				de: "Kristall-Typ"
			},
			effect: {
				en: "Whenever you attach a Fire, Water, or Lightning basic Energy card from your hand to Ho-oh, Ho-oh's type (color) becomes the same as that type of energy until the end of the turn.",
				de: "Immer wenn du eine -, - oder -Basis-Energiekarte aus deiner Hand an Ho-oh anlegst, ändert sich Ho-ohs Typ (Farbe) bis zum Ende des Zuges zu dem gleichen Typ wie diese Energie."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				en: "Holy Flame",
				de: "Heilige Flamme"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Scalding Steam",
				de: "Siedend heißer Dampf"
			},
			effect: {
				en: "Discard an Energy card attached to Ho-oh and flip a coin. If heads, the Defending Pokémon is now Burned.",
				de: "Lege eine an Ho-oh angelegte Energiekarte auf deinen Ablagestapel und wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt verbrannt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		tcgplayer: 86121
	}
}

export default card
