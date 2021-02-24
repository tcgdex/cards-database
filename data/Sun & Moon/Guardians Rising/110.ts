import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Fletchinder",
		fr: "Braisillon",
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		662,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Fletchling",
		fr: "Passerouge",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flap",
				fr: "Battement",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Wind",
				fr: "Coupe-Vent",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
