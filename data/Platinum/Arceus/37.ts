import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Graveler",
		de: "Georok"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		75,
	],
	
	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Geodude",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				de: "Tackle"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				de: "Risikotackle"
			},
			effect: {
				en: "Graveler does 10 damage to itself.",
				de: "Georok fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		en: "It rolls on mountain paths to move. Once it builds momentum, no Pokémon can stop it without difficulty.",
	},

	thirdParty: {
		cardmarket: 278909,
		tcgplayer: 85894
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
