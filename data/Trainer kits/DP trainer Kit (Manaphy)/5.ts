import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	dexId: [393],
	set: Set,

	name: {
		en: "Piplup",
		fr: "Tiplouf"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 60,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic"
			},
			damage: 10
		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Splash",
				fr: "Éclaboussure"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "20+"
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "10+"
		}
	],

	description: {
		en: "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold."
	},

	retreat: 1
}

export default card
