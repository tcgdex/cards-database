import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Latios ex",
		'fr-fr': "Latios ex",
		'de-de': "Latios ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [381],

	hp: 100,

	stage: "Basic",
	types: [
		"Colorless"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Stream",
				'fr-fr': "Courant d'énergie",
				'de-de': "Energy Stream"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your discard pile for a basic Energy card and attach it to Latios ex.",
				'fr-fr': "Lancez une pièce. Si c'est face, cherchez dans votre deck une carte Énergie de base et attachez-la à Latios ex.",
				'de-de': "Flip a coin. If heads, search your discard pile for a basic Energy card and attach it to Latios ex."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Luster Purge",
				'fr-fr': "Purge",
				'de-de': "Luster Purge"
			},
			effect: {
				'en-us': "Discard 3 Energy attached to Latios ex.",
				'fr-fr': "Défaussez trois Énergies attachées à Latios ex.",
				'de-de': "Discard 3 Energy attach to Latios EX"
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86673,
				cardmarket: 275971
			},
		},
	],

}

export default card
