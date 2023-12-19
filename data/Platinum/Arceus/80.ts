import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Wingull",
		de: "Wingull"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		278,
	],

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
				en: "Glide",
				de: "Gleiten"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				de: "Schlitzender Schlag"
			},
			effect: {
				en: "During your next turn, Wingull can't use Slashing Strike.",
				de: "Wingull kann Schlitzender Schlag in deinem nächsten Zug nicht einsetzen."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
