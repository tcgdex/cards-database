import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		54,
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
				en: "Headache",
				fr: "Migraine",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Trainer cards from their hand during their next turn.",
				fr: "Lancez une pièce. Si c’est face, votre adversaire ne peut pas jouer de carte Dresseur de sa main pendant son prochain tour.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
