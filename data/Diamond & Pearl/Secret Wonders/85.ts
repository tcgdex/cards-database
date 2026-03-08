import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
		de: "Digda"
	},

	illustrator: "Takao Unno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		50,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Down Draw",
				fr: "Pioche du dessous",
				de: "Tiefer Zug"
			},
			effect: {
				en: "Draw a card from the bottom of your deck.",
				fr: "Piochez une carte du dessous de votre deck.",
				de: "Ziehe die unterste Karte deines Decks."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Mud Spatter",
				fr: "Éclaboussure de boue",
				de: "Lehmspritzer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277838,
		tcgplayer: 84823
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
