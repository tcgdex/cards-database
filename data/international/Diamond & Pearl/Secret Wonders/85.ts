import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur",
		'de-de': "Digda"
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
				'en-us': "Down Draw",
				'fr-fr': "Pioche du dessous",
				'de-de': "Tiefer Zug"
			},
			effect: {
				'en-us': "Draw a card from the bottom of your deck.",
				'fr-fr': "Piochez une carte du dessous de votre deck.",
				'de-de': "Ziehe die unterste Karte deines Decks."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Mud Spatter",
				'fr-fr': "Éclaboussure de boue",
				'de-de': "Lehmspritzer"
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

	description: {
		'en-us': "A Pokémon that lives underground. Because of its dark habitat, it is repelled by bright sunlight.",
	},

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
