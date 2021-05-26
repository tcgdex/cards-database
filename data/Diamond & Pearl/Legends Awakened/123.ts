import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Swinub",
		fr: "Marcracrin",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		220,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sniff Out",
				fr: "Flairer",
			},
			effect: {
				en: "Flip a coin. If heads, put any 1 card from your discard pile into your hand.",
				fr: "Lancez une pièce. Si c'est face, placez n'importe quelle carte de votre pile de défausse dans votre main.",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Lunge Out",
				fr: "Allonger",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
